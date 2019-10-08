import React from 'react';
import { FormattedMessage } from 'react-intl';

import LoginForm from './../components/LoginForm';
import Registration from '../components/Registration';

import siteConfig from '../site-config';


class LoginAndRegForm extends React.Component {

    constructor() {
        super();
        this.state = {
            login: "",
            password: "",
        }

        this.handleChangeState = this.handleChangeState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault()

        let handleLogin = this.state.login;
        let handlePassword = this.state.password;

        const data = {
            'email' : handleLogin,
            'password' : handlePassword
        };

        return fetch(`${siteConfig.laravelApiUrl}/api/login`,{
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',                
            },
            body: JSON.stringify(data),
            method : "POST",
        })
        .then(r => r.json())
        .then(data => {
            if(data.data[1] === 'fail'){
                alert('Fail')
            }else{
                alert('Logged in')
            }
        });
        
    }

    handleChangeState(event) {
        const {name, value} = event.target;
        this.setState({ [name]: value })
    }

    render() {    
        return (
            <main class="loginAndRegisterPage">
                <LoginForm />
                <Registration />
            </main>
        );
    }
}

export default LoginAndRegForm;