export const increment = nr => {
    return {
        type: 'INCREMENT',
        payload: nr
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const login = () => {
    return {
        type: 'SIGN_IN'
    }
}

export const showSignUpPop = () => {
    return {
        type: 'OPEN'
    }
}

export const closeSignUpPop = () => {
    return {
        type: 'CLOSE'
    }
}

export const isRegViewPage = () => {
    return {
        type: 'REG'
    }
}

export const isLogginViewPage = () => {
    return {
        type: 'LOGIN'
    }
}

export const choosen_language = ln => {
    return {
        type: 'CCL',
        ln
    }
}