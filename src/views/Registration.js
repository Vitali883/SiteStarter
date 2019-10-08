import React from 'react';
import { FormattedMessage } from 'react-intl';


function Registration () {
    return (
        <main>
            <h1>
                <FormattedMessage
                    id='reg.reg_form'
                    defaultMessage='Registration'
                />
            </h1>
        </main>
    );
}

export default Registration;