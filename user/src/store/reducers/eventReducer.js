const initialState = {
  events: [],
  loading: true
}

function eventReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_EVENT':
      return { ...state, events: action.payload }
    case 'SET_LOADING_EVENT':
      return { ...state, loading: action.payload }
    default:
      return state
  }
}

export default eventReducer