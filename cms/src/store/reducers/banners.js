const initialState = {
  banners: [],
  loading: false
}

function bannerReducer(state = initialState, action) {
  switch(action.type) {
    case "SET_BANNERS":
      return {...state, banners: action.payload}
    case "SET_LOADING_BANNER":
      return {...state, loading: action.payload}
    default: 
      return state;
  }
}

export default bannerReducer;