const loggedReducer = (state = {
        isUserLogged: false,
        isikukood: null,
        status: null
    }, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return {isUserLogged: true, isikukood: action.payload[0].isikukood, status: action.payload[0].status } // ...state (persist state)
        default:
            return state;
    }
}

export default loggedReducer;