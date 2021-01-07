async function client(endpoint, { data: dataToSend, token, headers: customHeaders, ...customConfig } = {}) {
  const config = {
    method: dataToSend ? 'POST' : 'GET',
    body: dataToSend ? JSON.stringify(dataToSend) : undefined,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      'Content-Type': dataToSend ? 'application/json' : undefined,
      ...customHeaders,
    },
    ...customConfig,
  }

  return window.fetch(`${endpoint}`, config).then(async (response) => {
    if (response.status === 401) {
      // refresh the page for them
      window.location.assign(window.location)
      return Promise.reject({ message: 'There was an error' })
    }
    const data = await response.json()
    if (response.ok) {
      return data
    }
    return Promise.reject(data)
  })
}

export { client }
