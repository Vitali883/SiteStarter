import React from 'react';
import {FormattedMessage} from 'react-intl'

function About() {
    return (
        <div>
            <h1>
                <FormattedMessage id="nav.about" defaultMessage="About"/>
            </h1>
        </div>
    );
}

export default About;