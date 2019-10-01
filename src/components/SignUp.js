import React from 'react';
// import {useDispatch, useSelector} from 'react-redux';
import { FormattedMessage } from 'react-intl';

// import {SignUpPopView, lognFormPageView} from '../actions';


function SignUp(props) {
    return (
        <div>
            <button onClick={() => { props.onClick(); }}>Login</button>
        </div>
    );

    // const isLoginPage = useSelector(state => state.isLogginViewPage);

    // const dispatch = useDispatch();

    // if (isLoginPage) {
    //     return (
    //         <div className='popup'>
    //             <div className='popup_inner'>
    //                 <div id='popUp_Header'>
    //                     <span></span>
    //                     <h1>
    //                         <FormattedMessage id='nav.signin' defaultMessage='Sign in'/>
    //                     </h1>
    //                     <button onClick={() => dispatch(SignUpPopView('CLOSE'))}>X</button>
    //                 </div>
    //                 <div id='popUp_Content'>
    //                     <label>
    //                         <b>
    //                             <FormattedMessage id='signin.email' defaultMessage='Email'/>
    //                         </b>
    //                     </label><br/>
    //                     <input type='email' id='user-name' name='user-name' placeholder='email'/><br/>
    //                     <label>
    //                         <b>
    //                             <FormattedMessage id='signin.password' defaultMessage='Password'/>
    //                         </b>
    //                     </label><br/>
    //                     <input type='password' id='password' name='password' placeholder='password'/>

    //                     <br/>
    //                     <button type='submit'>
    //                         <FormattedMessage id='signin.login' defaultMessage='Login'/>
    //                     </button>
    //                 </div>
    //                 <div id='popUp_Footer'>
    //                     <button onClick={() => dispatch(lognFormPageView('REG'))}>
    //                         <i className='fa fa-user fa-2x' aria-hidden='true'></i>
    //                         <FormattedMessage id='signin.create_account' defaultMessage='Create account'/>
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div className='popup'>
    //             <div className='popup_inner'>
    //                 <div id='popUp_Header'>
    //                     <span></span>
    //                     <h1>
    //                         <FormattedMessage id='reg.reg_form' defaultMessage='Sign up'/>
    //                     </h1>
    //                     <button
    //                         onMouseUp={() => dispatch(lognFormPageView('LOGIN'))}
    //                         onClick={() => dispatch(SignUpPopView('CLOSE'))}>
    //                         X
    //                     </button>
    //                 </div>
    //                 <div id='popUp_Content'>
    //                     <label>
    //                         <b>
    //                             <FormattedMessage
    //                                 id='reg.firstname_lastname'
    //                                 defaultMessage='Firstname, Lastname'/>
    //                         </b>
    //                     </label>
                        
    //                     <br/>
                        
    //                     <input
    //                         type='text'
    //                         id='user-name'
    //                         name='user-name'
    //                         placeholder='Firstname Lastname'
    //                     />

    //                     <br/>

    //                     <label>
    //                         <b>
    //                             <FormattedMessage id='signin.email' defaultMessage='Email'/>
    //                         </b>
    //                     </label>

    //                     <br/>

    //                     <input type='email' id='user-name' name='user-name' placeholder='Email'/>
                        
    //                     <br/>

    //                     <label>
    //                         <b>
    //                             <FormattedMessage id='signin.password' defaultMessage='Password'/>
    //                         </b>
    //                     </label>
    //                     <br/>
    //                     <input type='password' id='password' name='password' placeholder='password'/>
    //                     <br/>
    //                     <label>
    //                         <b>
    //                             <FormattedMessage id='reg.confirm_pass' defaultMessage='Password'/>
    //                         </b>
    //                     </label>
    //                     <br/>
    //                     <input
    //                         type='password'
    //                         id='password_confirm'
    //                         name='password_confirm'
    //                         placeholder='Confirm password'
    //                     />
    //                     <br/>
    //                     <button type='submit'>
    //                         <FormattedMessage id='reg.registration' defaultMessage='Registration'/>
    //                     </button>
    //                 </div>
    //                 <div id='popUp_Footer'>
    //                     <button onClick={() => dispatch(lognFormPageView('LOGIN'))}>
    //                         <i className='fa fa-user fa-2x' aria-hidden='true'></i>
    //                         <FormattedMessage id='reg.back_to_login' defaultMessage='Back to login'/>
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
}

export default SignUp;