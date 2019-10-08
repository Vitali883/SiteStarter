import React from 'react';
import { FormattedMessage } from 'react-intl';
import siteConfig from '../site-config';


class LoginForm extends React.Component {
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
        return(
            <form className="loginForm">
                <h2>Login</h2>
                <label>
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
                    name='login'
                    placeholder='email'
                    value={this.props.login}
                    onChange={this.handleChangeState}
                />
                <br />
                <label>
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
                    name='password'
                    placeholder='password'
                    value={this.props.password}
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

export default LoginForm;