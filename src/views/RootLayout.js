import React from 'react';

import './RootLayout.css';

import Header from './../components/Header';
import Footer from './../components/Footer';
// import SideMenu from '../components/SideMenu';

import rootRoutes from './../routes/root';

export function RootLayout() {
    return (
        <div className='main_container'>
            <Header />
            {/* <SideMenu /> */}
            {rootRoutes}
            <Footer />
        </div>
    );
}