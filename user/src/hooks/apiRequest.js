import axios from 'axios';

const url = 'http://localhost:3000/customer'

export function registering(payload) {

  return axios({
    method: 'POST',
    url: `${url}/register`,
    data: payload
  })
}

export function payment(payload) {

  return axios({
    method: "POST",
    url: `${url}/book/`,
    headers: {
      access_token: localStorage.getItem("access_token")
    },
    data: {
      class: payload.class,
      EventId: payload.EventId,
      seat: payload.seat,
      price: payload.price
    }
  })
  // .then(data => {
  //   Swal.fire({
  //     position: 'top-end',
  //     icon: 'success',
  //     title: 'Transaction succesed',
  //     showConfirmButton: false,
  //     timer: 1500
  //   })
  // })
  // .catch(err => {
  // })
}

export function realPayment() {
  return (dispatch, getState) => {
    const { TicketId } = getState().eventReducer
    axios({
      method: 'PATCH',
      url: `${url}/buy/${TicketId}`,
      headers: {
        access_token: localStorage.getItem('access_token')
      },
      data: {}
    })
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }
}