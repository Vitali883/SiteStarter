const signUpReducer = (state = false, action) => {
    // state = { isuserloggedin, user, first name, last name , ... }
    switch(action.type) {
        case 'OPEN':
            return state=true;
        case 'CLOSE':
            return state=false;
        default:
            return state;
    }
}

export default signUpReducer;