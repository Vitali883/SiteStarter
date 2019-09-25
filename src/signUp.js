import React from 'react';
import {closeSignUpPop} from './actions';
import {useDispatch} from 'react-redux';

function SignUp() {
    const dispatch = useDispatch();

    return (
        <div className='popup'>
            <div className='popup_inner'>
                <h1>Test</h1>
                <button onClick={() => dispatch(closeSignUpPop())}>close me</button>
            </div>
        </div>
    )
}

export default SignUp