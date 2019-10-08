import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import siteConfig from '../site-config';

const currLang = useSelector(state => state.userLanguage);

class LoginForm extends React.Component {

    constructor() {
        super();
        this.state = {
            login: "",
            password: ""
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

    render(props) {

        const { onClose } = this.props;
        

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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
                        value={this.state.login}
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
                        value={this.state.password}
                        onChange={this.handleChangeState}
                    />
                    <br />
                    <button type='submit'>
                        <FormattedMessage
                            id='signin.login'
                            defaultMessage='Login'
                        />
                    </button>

                    <button onClick={() => { this.props.onClick(); }}>close</button>
                </form>


                <div id='popup__inner__footer'>
                    <Link onClick={() => onClose()} to={`/${currLang}/registration`}>
                        <i className='fa fa-user fa-2x' aria-hidden='true'></i>
                        <FormattedMessage
                            id='signin.create_account'
                            defaultMessage='Create account'
                        />
                    </Link>
                </div>  

                
            </div>
        );
    }
}

export default LoginForm;