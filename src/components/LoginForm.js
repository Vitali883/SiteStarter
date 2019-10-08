import React from 'react';
import { FormattedMessage } from 'react-intl';


function LoginForm() {
    return(
        <form>
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
                value=""
                onChange=""
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
                value=""
                onChange=""
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

export default LoginForm;