
export function login(userInfo) {
    return {
        type: 'SIGN_IN',
        payload: userInfo
    };
}

export function SignUpPopView(view) {
    return {
        type: view
    };
}

export function lognFormPageView(view) {
    return {
        type: view
    };
}

export function choosenLanguage(ln) {
    return {
        type: ln
    };
}