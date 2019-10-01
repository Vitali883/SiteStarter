import React from 'react';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';

import messages from './messages';
import routes from './routes';


function App() {
    const currLang = useSelector(state => state.userLanguage);

    return (
        <IntlProvider
            locale={currLang}
            messages={messages[currLang]}
        >
            {routes}
        </IntlProvider>
    );
}

export default App;