import React from 'react';
//import { FormattedMessage } from 'react-intl';


function LoginForm(props) {
    return (
        <div>
            <button onClick={() => { props.onClick(); }}>Login</button>
        </div>
    );
}

export default LoginForm;