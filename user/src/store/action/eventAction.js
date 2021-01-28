import axios from 'axios'

export function fetchEvent() {
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

export function fetchEvents() {
  return (dispatch, getState) => {
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

export function setEvent(payload) {
  return { type: 'GET_EVENT', payload }
}

export function setLoading() {
  return { type: 'SET_LOADING_EVENT', payload: false }
}

export function fetchEventById(EventId) {
  return (dispatch, getState) => {
    // console.log(TicketId, 'ini ticketid')
    axios({
      url: `http://localhost:3000/customer/events/${EventId}`,
      method: 'GET',
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
      .then(response => {
        console.log('datanyaaa >>>>>', response.data)
        dispatch({
          type: "SET_DETAIL_EVENT",
          payload: response.data

        })
        // dispatch({
        //   type: 'SET_TICKET_ID',
        //   // EventId
        // })

      })
      .catch((error) => {
        console.log(error)
      })
      .finally(_ => {
        dispatch({
          type: "SET_LOADING_EVENT",
          loading: false
        })
      })
  }
}

export function updateCapacity(payload) {
  console.log(payload, "I LOVE YOU")
  return { type: "UPDATE_EVENTS_REGULAR", payload }
}

export function updateCapacityVvip(payload) {
  console.log(payload, "I LOVE YOU")
  return { type: "UPDATE_EVENTS_VVIP", payload }
}

export function updateCapacityVip(payload) {
  console.log(payload, "I LOVE YOU")
  return { type: "UPDATE_EVENTS_VIP", payload }
}

export function setTicketId(payload) {
  return { type: "SET_TICKET_ID", payload }
}