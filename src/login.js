import React from 'react';
import SignUp from './signUp';
import {useSelector, useDispatch} from 'react-redux';
import {SignUpPopView} from './actions';
import { FormattedMessage } from 'react-intl'

function Login() {
    const isShowingPopUp = useSelector(state => state.showSignUpPop);

    const dispatch = useDispatch();

    if (!isShowingPopUp) {
        return (
            <button onClick={() => dispatch(SignUpPopView('OPEN'))} className="Sign_in_btn">
                <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                <FormattedMessage
                    id="nav.signin"
                    defaultMessage="Sign in"
                />
            </button>
        )
    } else {
        return (<SignUp/>)
    }
}

export default Login
