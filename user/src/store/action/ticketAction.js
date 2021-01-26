import handleResponse from '../../helpers/fetchHandleResponse';

export const fetchTickets = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/customer/ticket', {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
      .then(handleResponse)
      .then((data) => {
        dispatch({
          type: "history/setTickets",
          tickets: data.results
        })
      })
      .catch((error) => {
        dispatch({
          type: "history/setTicketsError",
          ticketsError: error
        })
      })
      .finally(_ => {
        dispatch({
          type: "history/setTicketsIsLoading",
          ticketsIsLoading: false
        })
      })
  }
}