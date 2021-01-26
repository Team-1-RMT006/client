const initialState = {
  tickets: [],
  ticketsIsLoaded: false,
  ticketsError: null
}

function ticketReducer( state = initialState, action ) {
  switch(action.type) {
    case 'history/setTickets':
      return { ...state, tickets: action.tickets }
    case 'history/setTicketsIsLoaded':
      return { ...state, ticketsIsLoaded: action.ticketsIsLoaded }
    case 'history/setTicketsError':
      return { ...state, ticketsError: action.ticketsError }
    default:
      return state
  }
}

export default ticketReducer;
