import { useForm, ValidationError } from '@formspree/react'
import { Button } from './designSystem/Buttons'

const ContactFormWhook = function () {
  const [state, handleSubmit] = useForm('moqpyjwv', {
    data: {
      _subject: 'Vous avez un message',
      pageTitle() {
        // This function will be evaluated at submission time
        return document.title
      },
    },
    errors: [
      {
        field: 'email',
        message: 'Email requis, svp.',
        code: 'REQUIRED',
      },
      {
        field: 'message',
        message: 'Le message est requis.',
        code: 'REQUIRED',
      },
    ],
  })

  console.log(state)

  return (<>
    {(state.succeeded) && <p role={'alert'} className='bg-yellow-300 p-4 mb-4'>
      <span role={'img'} alt="">🚀</span>{' '}
      Merci pour votre message. Je reviens vers vous au plus vite.
      </p>}
    <form onSubmit={handleSubmit} className="grid enveloppevintage">
      <label htmlFor="email" className="flex flex-col pb-4">
        Votre e-mail (requis)
        <input 
          id="email" 
          type="email" 
          required 
          name="email" 
          className="bg-gray-200 mt-2 focus:ring-2 focus:ring-blue-400" />
      </label>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message" className="flex flex-col pb-4">
        Message (requis)
        <textarea 
          id="message" 
          name="message" 
          required 
          className="bg-gray-200 mt-2 focus:ring-2 focus:ring-blue-400" />
      </label>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button type="submit" purpose="primary" size="lg" disabled={state.submitting}>
        Envoyer
      </Button>
    </form>
    </>
  )
}
export default ContactFormWhook
