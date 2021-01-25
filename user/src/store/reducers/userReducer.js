const initState = {
  UserLogin: {},
  error: [],
  loading: true
}

function userReducer(state = initState, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, UserLogin: action.payload }
    default:
      return state
  }
}

export default userReducer