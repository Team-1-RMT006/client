const initialState = {
  tickets: [],
  ticketsIsLoading: true,
  ticketsError: null,
  ticket: {},
  ticketIsLoading: true,
  ticketError: null
}

function ticketReducer( state = initialState, action ) {
  switch(action.type) {
    case 'history/setTickets':
      return { ...state, tickets: action.tickets }
    case 'history/setTicketsIsLoading':
      return { ...state, ticketsIsLoading: action.ticketsIsLoading }
    case 'history/setTicketsError':
      return { ...state, ticketsError: action.ticketsError }
    case 'eventDetail/setTicket':
      return { ...state, ticket: action.ticket }
    case 'eventDetail/setTicketIsLoading':
      return { ...state, ticketIsLoading: action.ticketIsLoading }
    case 'eventDetail/setTicketError':
      return { ...state, ticketError: action.ticketError }
    default:
      return state
  }
}

export default ticketReducer;