import handleResponse from '../../helpers/fetchHandleResponse';
import axios from 'axios'


// export const fetchTickets = () => {
//   return (dispatch) => {
//     fetch('http://localhost:3000/customer/ticket', {
//       headers: {
//         access_token: localStorage.getItem("access_token")
//       }
//     })
//       .then(handleResponse)
//       .then((data) => {
//         dispatch({
//           type: "history/setTickets",
//           tickets: data.results
//         })
//       })
//       .catch((error) => {
//         dispatch({
//           type: "history/setTicketsError",
//           ticketsError: error
//         })
//       })
// .finally(_ => {
//   dispatch({
//     type: "history/setTicketsIsLoading",
//     ticketsIsLoading: false
//   })
// })
//   }
// }

export function fetchTickets() {
  return (dispatch, getState) => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/customer/ticket',
      headers: {
        'access_token': localStorage.getItem('access_token')
      }
    })
      .then(response => {
        dispatch({
          type: "history/setTickets",
          tickets: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
      .finally(_ => {
        dispatch({
          type: "history/setTicketsIsLoading",
          ticketsIsLoading: false
        })
      })
  }
}

export const fetchTicketById = (TicketId) => {
  return (dispatch, getState) => {
    console.log(localStorage.getItem('access_token'))
    axios({
      url: `http://localhost:3000/customer/events/${TicketId}`,
      method: 'GET',
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
      .then(response => {
        console.log('datanyaaa >>>>>', response.data)
        dispatch({
          type: "eventDetail/setTicket",
          ticket: response.data
        })
      })
      .catch((error) => {
        console.log(error)
        dispatch({
          type: "eventDetail/setTicketError",
          ticketError: error
        })
      })
      .finally(_ => {
        dispatch({
          type: "eventDetail/setTicketIsLoading",
          ticketIsLoading: false
        })
      })

    // fetch(`http://localhost:3000/customer/ticket/${TicketId}`, {
    //   headers: {
    //     access_token: localStorage.getItem("access_token")
    //   }
    // })
    //   .then(handleResponse)
    //   .then((data) => {
    //     dispatch({
    //       type: "eventDetail/setTicket",
    //       ticket: data.results
    //     })
    //   })
    //   .catch((error) => {
    //     dispatch({
    //       type: "eventDetail/setTicketError",
    //       ticketError: error
    //     })
    //   })
    //   .finally(_ => {
    //     dispatch({
    //       type: "eventDetail/setTicketIsLoading",
    //       ticketIsLoading: false
    //     })
    //   })
  
  }
}
