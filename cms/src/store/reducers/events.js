const initialState = {
  eventsByOrganizer: [],
  eventsByStatus: [],
  eventsType: [],
  loading: false
}

function eventReducer(state = initialState, action) {
  switch(action.type) {
    case "SET_EVENTS_BY_ORGANIZER":
      return {...state, eventsByOrganizer: action.payload}
    case "SET_EVENTS_BY_STATUS":
      return {...state, eventsByStatus: action.payload};
    case "SET_EVENTS_TYPE":
      return {...state, eventsType: action.payload};
    case "SET_LOADING_EVENTS":
      return {...state, loading: action.payload};
    default: 
      return state;
  }
}

export default eventReducer;