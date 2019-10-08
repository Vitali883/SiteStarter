import React from 'react';
import { FormattedMessage } from 'react-intl';


function Registration () {
    return (
        <main>
            <div>
                <div>
                    <div>
                        <span></span>
                        <h1>
                            <FormattedMessage id='reg.reg_form' defaultMessage='Sign up'/>
                        </h1>                    
                    </div>
                    <div id='popUp_Content'>
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
                    <div id='popUp_Footer'>
                        <button>
                            <i className='fa fa-user fa-2x' aria-hidden='true'></i>
                            <FormattedMessage id='reg.back_to_login' defaultMessage='Back to login'/>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Registration;