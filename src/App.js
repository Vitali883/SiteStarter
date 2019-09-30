import React from 'react';
import './App.css';

import Header from "./header"
import Footer from "./footer"
import SideMenu from "./sideMenu"
import Content from "./content.js"
import { IntlProvider } from "react-intl"
import { useSelector } from 'react-redux';
import messages from './messages'

function App() {
    const curr_lang = useSelector(state => state.userLanguage);
    return (
        <IntlProvider
            locale={curr_lang}
            messages={messages[curr_lang]}
        >
            <div className="main_container">
                <Header/>
                <SideMenu/>
                <Content/>
                <Footer/>
            </div>
        </IntlProvider>
    );
}

export default App;