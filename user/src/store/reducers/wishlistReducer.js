const initState = {
  wishlistEvent: []
}

function wishlistReducer(state = initState, action) {
  switch (action.type) {
    case 'ADD_WISHLIST':
      const newWishlist = state.wishlistEvent.concat(action.payload)
      return { ...state, wishlistEvent: newWishlist }
    case 'REMOVE_WISHLIST':
      const newEventWishlist = state.wishlistEvent.filter(el => el.idTicket !== action.payload)
      return { ...state, wishlistEvent: newEventWishlist }
    case 'SET_WISHLIST':
      return { ...state, wishlistEvent: action.payload }
    default:
      return state
  }
}

export default wishlistReducer