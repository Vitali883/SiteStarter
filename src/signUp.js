import React from 'react';
import {closeSignUpPop, isLogginViewPage, isRegViewPage} from './actions';
import {useDispatch,useSelector} from 'react-redux';

function SignUp() {
    const isLoginPage = useSelector(state => state.isLogginViewPage);

    const dispatch = useDispatch();

    if(isLoginPage){
        return(
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
                        <button onClick={() => dispatch(isRegViewPage())}><i class="fa fa-user fa-2x" aria-hidden="true"></i> Create account</button>
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div id="popUp_Header">
                        <span></span>
                        <h1>Sign up</h1>
                        <button onClick={() => dispatch(closeSignUpPop())}>X</button>
                    </div>
                    <div id="popUp_Content">

                        <label for="firstname_lastname"><b>Firstname Lastname</b></label><br />                    
                        <input type="text" id="user-name" name="user-name" placeholder="Firstname Lastname" /><br />

                        <label for="uname"><b>Email</b></label><br />                    
                        <input type="email" id="user-name" name="user-name" placeholder="Email" /><br />

                        <label for="uname"><b>Password</b></label><br />
                        <input type="password" id="password" name="password" placeholder="password" /><br />

                        <label><b>Confirm password</b></label><br />
                        <input type="password" id="password" name="password" placeholder="Confirm password" />

                        <br />
                        <button type="submit">Registration</button>
                    </div>
                    <div id="popUp_Footer">
                        <button onClick={() => dispatch(isLogginViewPage())}><i class="fa fa-user fa-2x" aria-hidden="true"></i> Back to sign in</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp