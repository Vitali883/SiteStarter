import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { IntlProvider } from 'react-intl';

import './App.css'; // move to views root layout

// import Header from './components/Header';
// import Footer from './components/Footer';
// import SideMenu from './components/sideMenu';
// import Content from './content';

import messages from './messages';
import routes from './routes';


function App() {
    const currLang = useSelector(state => state.userLanguage);

    // const location = useLocation();

    // useEffect(() => {
    //     console.log(location);
    // }, [location]);

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