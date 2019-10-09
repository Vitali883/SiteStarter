const userReducer = (state = {
        isUserLogged: false,
        firstName: null,
        lastName: null,
        password: null,
        email: null,
        rating: null,
        confirmed: null,
        phone: null
    }, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            const data = action.payload[0];
            return {
                isUserLogged: true,
                firstName: data.first_name,
                lastName: data.last_name,
                password: data.password,
                email: data.email,
                rating: data.rating,
                confirmed: data.confirmed,
                phone: data.phone
            } // ...state (persist state)
        default:
            return state;
    }
}

export default userReducer;