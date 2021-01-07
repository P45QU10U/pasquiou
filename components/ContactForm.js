import React, { useState } from 'react'
import { client } from '../utils/client'

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      })
      setInputs({
        email: '',
        message: '',
      })
    } else {
      setStatus({
        info: { error: true, msg },
      })
    }
  }
  const handleOnChange = React.useCallback((e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }, [])

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    client('https://formspree.io/f/moqpyjwv', {
      method: 'POST',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(true, 'Merci, votre message a été transmis.')
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error)
      })
  }
  return (
    <div>
      <h4>Contactez-moi</h4>

      <form onSubmit={handleOnSubmit} className="grid grid-cols-1 grid-rows-3 gap-2 items-center w-2/4 mx-auto">
        <label htmlFor="email" className="flex justify-between">
          Email (requis)
          <input
            className="ml-4 bg-gray-200"
            id="email"
            type="email"
            name="_replyto"
            onChange={handleOnChange}
            required
            value={inputs.email}
          />
        </label>
        <label htmlFor="message" className="flex justify-between">
          Message
          <textarea
            className="ml-4 bg-gray-200"
            id="message"
            name="message"
            onChange={handleOnChange}
            required
            value={inputs.message}
          />
        </label>
        <button type="submit" disabled={status.submitting}>
          {!status.submitting ? (!status.submitted ? 'Envoi' : 'Envoyé') : 'Envoi en cours...'}
        </button>
      </form>
      {status.info.error && <div className="error">Error: {status.info.msg}</div>}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </div>
  )
}
