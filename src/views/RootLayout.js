import React from 'react';

import './RootLayout.css';

import Header from './../components/Header';
import Footer from './../components/Footer';

import rootRoutes from './../routes/root';


export function RootLayout() {
    return (
        <div className='main_container'>
            <Header />
            {rootRoutes}
            <Footer />
        </div>
    );
}