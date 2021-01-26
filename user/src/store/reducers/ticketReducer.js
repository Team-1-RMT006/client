const initialState = {
  tickets: [],
  ticketsIsLoading: true,
  ticketsError: null
}

function ticketReducer( state = initialState, action ) {
  switch(action.type) {
    case 'history/setTickets':
      return { ...state, tickets: action.tickets }
    case 'history/setTicketsIsLoading':
      return { ...state, ticketsIsLoading: action.ticketsIsLoading }
    case 'history/setTicketsError':
      return { ...state, ticketsError: action.ticketsError }
    default:
      return state
  }
}

export default ticketReducer;