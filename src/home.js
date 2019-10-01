import React from 'react';
import {FormattedMessage} from 'react-intl'

function Home() {
    return (
        <div>
            <h1>
                <FormattedMessage id="nav.home" defaultMessage="Home"/>
            </h1>
        </div>
    );
}

export default Home;