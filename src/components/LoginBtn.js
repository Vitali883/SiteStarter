import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

// import Popup from './Popup';
// import LoginForm from './LoginForm';
//import { SignUpPopView } from '../actions';


function Login() {
    // const [userMenuState, setUserMenuState] = useState({
    //     isVisiblePopup: false
    // });

    // if (userMenuState.isVisiblePopup) {
    //     return (
    //         <Popup header='Login' onClose={() => { setUserMenuState({ isVisiblePopup: false }); }}>
    //             <LoginForm onClick={() => { setUserMenuState({ isVisiblePopup: false }); }} />
    //         </Popup>
    //     );
    // }
    const currLang = useSelector(state => state.userLanguage);

    return (
        <Link to={`/${currLang}/login`} className='signInBtn'>
            <i className='fa fa-user fa-2x' aria-hidden='true'></i>
            <FormattedMessage
                id='nav.signin'
                defaultMessage='Sign in'
            />
        </Link>
       
    );
}

export default Login;