import React from 'react';
import {FormattedMessage} from 'react-intl'

function Home() {
    return (
        <main>
            <h1>
                <FormattedMessage id="nav.home" defaultMessage="Home"/>
            </h1>
        </main>
    );
}

export default Home;