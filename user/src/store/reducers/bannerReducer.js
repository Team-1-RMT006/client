const initState = {
  banner: [],
  bannerLoading: true
}

const bannerReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_BANNER':
      return { ...state, banner: action.banner }
    case 'BANNER_LOADING':
      return { ...state, bannerLoading: action.bannerLoading }
    default:
      return state
  }
}

export default bannerReducer