import axios from 'axios'

export function fetchEvent () {
  return (dispatch, getState) => {
    axios({
      methods: 'GET',
      url: 'http://localhost:3000/customer/eventactive'
      })
      .then(response => {
        dispatch(setEvent(response.data))
        dispatch(setLoading())
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export function setEvent (payload) {
  return { type: 'GET_EVENT', payload }
}

export function setLoading() {
  return { type: 'SET_LOADING_EVENT', payload: false }
}