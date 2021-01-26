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

export function removeWishlist(id) {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/customer/wishlist/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'access_token': localStorage.getItem('access_token')
      }
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
        dispatch(dropWishlist(data))
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export function insertWishlist(payload) {
  return { type: 'ADD_WISHLIST', payload }
}

export function dropWishlist(payload) {
  return { type: 'REMOVE_WISHLIST', payload }
}

export function fetchWishlist() {
  return (dispatch, getState) => {
    fetch('http://localhost:3000/customer/wishlist', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'access_token': localStorage.getItem('access_token')
      }
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
        dispatch(setWishlist(data))
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export function setWishlist(payload) {
  return { type: 'SET_WISHLIST', payload }
}