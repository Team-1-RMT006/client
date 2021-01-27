import axios from 'axios'

export function addWishlist(id) {
  return (dispatch, getState) => {
    axios({
      method: 'POST',
      url: 'http://localhost:3000/customer/wishlist',
      headers: {
        'access_token': localStorage.getItem('access_token')
      },
      data: {
        EventId: id
      }
    })
      .then(response => {
        dispatch(insertWishlist(response.data))
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export function removeWishlist(id) {
  return (dispatch, getState) => {
    axios({
      method: 'DELETE',
      url: `http://localhost:3000/customer/wishlist/${id}`,
      headers: {
        'access_token': localStorage.getItem('access_token')
      }
    })
      .then(response => {
        dispatch(dropWishlist(id))
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
    axios({
      method: 'GET',
      url: 'http://localhost:3000/customer/wishlist',
      headers: {
        'access_token': localStorage.getItem('access_token')
      }
    })
      .then(response => {
        dispatch(setWishlist(response.data))
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export function setWishlist(payload) {
  return { type: 'SET_WISHLIST', payload }
}