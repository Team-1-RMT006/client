const initialState = {
  organizers: [],
  loading: false
}

function organizersReducer(state = initialState, action) {
  switch(action.type) {
    case "SET_ORGANIZERS":
      return {...state, organizers: action.payload}
    case "SET_LOADING_ORGANIZERS":
      return {...state, loading: action.payload}
    default: 
      return state;
  }
}

export default organizersReducer;