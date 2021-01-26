export function fetchEvent () {
  return (dispatch, getState) => {
    fetch('http://localhost:3000/customer/eventactive')
      .then(async response => {
        const data = await response.json()
        if (!response.ok) {
          const error = (data && data.message) || response.status
          return Promise.reject(error)
        }
        return data
      })
      .then(data => {
        dispatch(setEvent(data))
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export function setEvent (payload) {
  return { type: 'GET_EVENT', payload }
}