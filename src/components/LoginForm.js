import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import siteConfig from '../site-config';
import { login } from './../actions/';



class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            userLogin: "" ,
            userPassword: ""
        }

        this.handleChangeState = this.handleChangeState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleSubmit(event) {
        event.preventDefault();

        let handleLogin = this.state.userLogin;
        let handlePassword = this.state.userPassword;

        const data = {
            'email' : handleLogin,
            'password' : handlePassword
        };
        return fetch(`${siteConfig.laravelApiUrl}/api/login`, {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            method : "POST"
        })
        .then(r => r.json())
        .then(data => {
            if (data.data[1] === 'fail') {
                alert('failed to login')
            } else {
                alert('Logged in')
                this.props.login(data.data[0]);
            }
        });
    }

    handleChangeState(event) {
        const {name, value} = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} className="loginForm">
                <h2>Login</h2>
                <label htmlFor="userLoginId">
                    <b>
                        <FormattedMessage
                            id='signin.email'
                            defaultMessage='Email'
                        />
                    </b>
                </label>
                <br />
                <input 
                    type='text'
                    name='userLogin'
                    id='userLoginId'
                    placeholder='email'
                    value={this.props.userLogin}
                    onChange={this.handleChangeState}
                />
                <br />
                <label htmlFor="userPasswordId">
                    <b>
                        <FormattedMessage
                            id='signin.password'
                            defaultMessage='Password'
                        />
                    </b>
                </label>
                <br />
                <input
                    type='password'
                    name='userPassword'
                    id='userPasswordId'
                    placeholder='password'
                    value={this.props.userPassword}
                    onChange={this.handleChangeState}
                />
                <br />
                <button type='submit'>
                    <FormattedMessage
                        id='signin.login'
                        defaultMessage='Login'
                    />
                </button>
            </form>
        )
    }
}

function mapStateToProps() { // (state)
    return {
        //isLogged: state.isUserLogged
    }
}

function mapDispatchToProps() {
    return {
        login
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(LoginForm)