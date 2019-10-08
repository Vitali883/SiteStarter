import React from 'react';

import LoginForm from './../components/LoginForm';
import Registration from '../components/Registration';


function LoginAndRegForm() {
    return (
        <main class="loginAndRegisterPage">
            <LoginForm />
            <Registration />
        </main>
    );
}

export default LoginAndRegForm;