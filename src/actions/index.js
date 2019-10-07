
export function login() {
    return {
        type: 'SIGN_IN'
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