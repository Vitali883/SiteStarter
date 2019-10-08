import React from 'react';

import LoginForm from './../components/LoginForm';
import Registration from '../components/Registration';


function LoginAndRegForm() {
    return (
        <main className="loginAndRegisterPage">
            <LoginForm />
            <Registration />
        </main>
    );
}

export default LoginAndRegForm;