const initState = {
  banner: [],
  bannerLoading: true
}

const bannerReducer = (state = initState, action) => {
  switch (action.type) {
    case 'set_banner':
      return { ...state, banner: action.banner }
    case 'banner_loading':
      return { ...state, bannerLoading: action.bannerLoading }
    default:
      return state
  }
}

export default bannerReducer