import axios from 'axios'

export function fetchEvent () {
  return (dispatch, getState) => {
    axios({
      methods: 'GET',
      url: 'http://localhost:3000/customer/eventactive'
      })
      .then(response => {
        // console.log(response.data);
        dispatch(setEvent(response.data))
        dispatch(setLoading())
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export function fetchEvents() {
  return(dispatch, getState) => {
    axios({
      method: "GET",
      url: "http://localhost:3000/customer/eventactive",
    })
      .then(data => {
        const tampData = data.data
        // console.log(tampData);
        dispatch({
          type: "GET_EVENTS",
          tampData
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export function setEvent (payload) {
  return { type: 'GET_EVENT', payload }
}

export function setLoading() {
  return { type: 'SET_LOADING_EVENT', payload: false }
}

export function updateCapacity(payload) {
  // console.log("I LOVE YOU");
  return { type: "UPDATE_EVENTS_REGULAR", payload }
}