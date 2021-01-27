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
