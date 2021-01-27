const initState = {
  wishlistEvent: []
}

function wishlistReducer(state = initState, action) {
  switch (action.type) {
    case 'ADD_WISHLIST':
      const newWishlist = state.wishlistEvent.concat(action.payload)
      return { ...state, wishlistEvent: newWishlist }
    case 'REMOVE_WISHLIST':
      console.log('remove wishlist >>>', action.payload)
      const newEventWishlist = state.wishlistEvent.filter(el => el.id !== action.payload)
      return { ...state, wishlistEvent: newEventWishlist }
    case 'SET_WISHLIST':
      return { ...state, wishlistEvent: action.payload }
    default:
      return state
  }
}

export default wishlistReducer