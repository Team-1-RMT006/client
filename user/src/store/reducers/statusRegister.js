const initialState = {
    statusRegister: false
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "SET_GO_TO_LOGIN":
            return { ...state, statusRegister: action.data}
        default:
            return state
    }
}

export default reducer