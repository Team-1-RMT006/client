export function addWishlist(id) {
  return (dispatch, getState) => {
    fetch('http://localhost:3000/customer/wishlist', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'access_token': localStorage.getItem('access_token')
      },
      body: JSON.stringify({
        EventId: id
      })
    })
      .then(async response => {
        const data = await response.json()
        if (!response.ok) {
          const error = (data && data.message) || response.status
          return Promise.reject(error)
        }
        return data
      })
      .then(data => {
        dispatch(insertWishlist(data))
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export function insertWishlist(payload) {
  return { type: 'ADD_WISHLIST', payload }
}