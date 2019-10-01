import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { IntlProvider } from 'react-intl';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import SideMenu from './components/sideMenu';
import Content from './content';

import messages from './messages';


function App() {
    const currLang = useSelector(state => state.userLanguage);

    const location = useLocation();

    useEffect(() => {
        console.log(location);
    }, [location]);

    return (
        <IntlProvider
            locale={currLang}
            messages={messages[currLang]}
        >
            <div className='main_container'>
                <Header/>
                <SideMenu/>
                <Content/>
                <Footer/>
            </div>
        </IntlProvider>
    );
}

export default App;