import React from 'react';
import { FormattedMessage } from 'react-intl';


function Registration() {
    return (
        <form className="registerForm">
            <div>
                <h2>
                    <FormattedMessage id='reg.reg_form' defaultMessage='Sign up'/>
                </h2>
                <label>
                    <b>
                        <FormattedMessage
                            id='reg.firstname_lastname'
                            defaultMessage='Firstname, Lastname'/>
                    </b>
                </label>

                <br/>

                <input
                    type='text'
                    id='user-name'
                    name='user-name'
                    placeholder='Firstname Lastname'
                />

                <br/>

                <label>
                    <b>
                        <FormattedMessage id='signin.email' defaultMessage='Email'/>
                    </b>
                </label>

                <br/>

                <input type='email' id='user-name' name='user-name' placeholder='Email'/>
                
                <br/>

                <label>
                    <b>
                        <FormattedMessage id='signin.password' defaultMessage='Password'/>
                    </b>
                </label>
                <br/>
                <input type='password' id='password' name='password' placeholder='password'/>
                <br/>
                <label>
                    <b>
                        <FormattedMessage id='reg.confirm_pass' defaultMessage='Password'/>
                    </b>
                </label>
                <br/>
                <input
                    type='password'
                    id='password_confirm'
                    name='password_confirm'
                    placeholder='Confirm password'
                />
                <br/>
                <button type='submit'>
                    <FormattedMessage id='reg.registration' defaultMessage='Registration'/>
                </button>
            </div>
        </form>
    );
}

export default Registration;