import React from 'react';
import { FormattedMessage } from 'react-intl'

function About() {
    return (
        <main>
            <h1>
                <FormattedMessage id='nav.about' defaultMessage='About'/>
            </h1>
        </main>
    );
}

export default About;