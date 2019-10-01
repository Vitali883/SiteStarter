import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl'

import Popup from './Popup';
import LoginForm from './LoginForm';
//import { SignUpPopView } from '../actions';


function Login() {
    const [userMenuState, setUserMenuState] = useState({
        isVisiblePopup: false
    });

    if (userMenuState.isVisiblePopup) {
        return (
            <Popup header='Login' onClose={() => { setUserMenuState({ isVisiblePopup: false }); }}>
                <LoginForm onClick={() => { setUserMenuState({ isVisiblePopup: false }); }} />
            </Popup>
        );
    }

    return (
        <button onClick={() => { setUserMenuState({ isVisiblePopup: true }); }} className='Sign_in_btn'>
            <i className='fa fa-user fa-2x' aria-hidden='true'></i>
            <FormattedMessage
                id='nav.signin'
                defaultMessage='Sign in'
            />
        </button>
    );
}

export default Login;