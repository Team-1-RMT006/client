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

export const fetchTicketById = (TicketId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/customer/ticket/${TicketId}`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
      .then(handleResponse)
      .then((data) => {
        dispatch({
          type: "eventDetail/setTicket",
          ticket: data.results
        })
      })
      .catch((error) => {
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
  }
}