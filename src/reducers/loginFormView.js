const isLogginViewPageReducer = (state = true, action) => {
    switch(action.type) {
        case 'LOGIN':
            return true;
        case 'REG':
            return false;
        default:
            return state;
    }
}

export default isLogginViewPageReducer;