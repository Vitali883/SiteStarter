import React from 'react';

import './RootLayout.css';

import Header from './../components/Header';
import Footer from './../components/Footer';

import rootRoutes from './../routes/root';


export function RootLayout(props) {
    return (
        <div className='main_container'>
            <Header location={props.location.pathname} />
            {rootRoutes}
            <Footer />
        </div>
    );
}