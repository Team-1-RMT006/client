const initialState = {
  events: [],
  loading: true,
  newEvents: [],
  detailEvent: [],
  TicketId: 0
}

function eventReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_EVENT':
      return { ...state, events: action.payload }
    case 'SET_LOADING_EVENT':
      return { ...state, loading: action.payload }
    case "GET_EVENTS":
      // console.log(action.tampData, "000");
      return { ...state, newEvents: action.tampData }
    case "UPDATE_EVENTS_REGULAR":
      // console.log("ATUH ANJING");
      const newValue = state.newEvents.map(event => {
        if (event.id === action.payload.id) {
          event.capacity_regular = action.payload.value
          return event
        } else {
          return event
        }
      })
      // console.log(acti);
      return { ...state, newEvents: newValue }
    case 'SET_DETAIL_EVENT':
      return { ...state, detailEvent: action.payload }
    case "UPDATE_EVENTS_REGULAR":
      console.log("ATUH ANJING");
      const newValue0 = state.newEvents.map(event => {
        if (event.id === action.payload.id) {
          event.capacity_regular = action.payload.value
          return event
        } else {
          return event
        }
      })
      // console.log(newValue, "opopopopo");
      return { ...state, newEvents: newValue0 }
    case "UPDATE_EVENTS_VIP":
      const newValue1 = state.newEvents.map(event => {
        if (event.id === action.payload.id) {
          event.capacity_vip = action.payload.value
          return event
        } else {
          return event
        }
      })
      return { ...state, newEvents: newValue1 }
    case "UPDATE_EVENTS_VVIP":
      const newValue2 = state.newEvents.map(event => {
        if (event.id === action.payload.id) {
          event.capacity_vvip = action.payload.value
          return event
        } else {
          return event
        }
      })
      return { ...state, newEvents: newValue2 }
    case 'SET_DETAIL_EVENT':
      return { ...state, detailEvent: action.payload }
      case 'SET_TICKET_ID':
        return {... state, TicketId: action.TicketId}
    default:
      return state
  }
}

export default eventReducer