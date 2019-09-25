import React from 'react';
import {closeSignUpPop} from './actions';
import {useDispatch} from 'react-redux';

function SignUp() {
    const dispatch = useDispatch();

    return (
        <div className='popup'>
            <div className='popup_inner'>
                <div id="popUp_Header">
                    <span></span>
                    <h1>Sign in</h1>
                    <button onClick={() => dispatch(closeSignUpPop())}>X</button>
                </div>
                <div id="popUp_Content">

                    <label for="uname"><b>Email</b></label><br />                    
                    <input type="email" id="user-name" name="user-name" placeholder="email" /><br />

                    <label for="uname"><b>Password</b></label><br />
                    <input type="password" id="password" name="password" placeholder="password" />

                    <br />
                    <button type="submit">Login</button>
                </div>
                <div id="popUp_Footer">
                    <button><i class="fa fa-user fa-2x" aria-hidden="true"></i> Create account</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp