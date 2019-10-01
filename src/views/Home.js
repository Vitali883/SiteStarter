import React from 'react';
import { FormattedMessage } from 'react-intl';


function Home(props) {
    return (
        <main>
            <h1>{props.match.params.ln}</h1>
            <h1>
                <FormattedMessage id='nav.home' defaultMessage='Home'/>
            </h1>
        </main>
    );
}

export default Home;