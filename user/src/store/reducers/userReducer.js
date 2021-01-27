const initState = {
  UserLogin: {},
  error: [],
  loading: true,
  local: ''
}

function userReducer(state = initState, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, UserLogin: action.payload }
    case 'SET_LOCAL':
      return { ...state, local: action.payload }
    default:
      return state
  }
}

export default userReducer