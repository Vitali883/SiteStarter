import React from 'react';
import './App.css';

import Header from "./header"
import Footer from "./footer"
import SideMenu from "./sideMenu"
import Content from "./content.js"


function App() {
    
    return (
        <div className="main_container">
            <Header/>
            <SideMenu/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;