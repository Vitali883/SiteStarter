import React from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';
import SideMenu from './../components/sideMenu';

import rootRoutes from './../routes/root';

export function RootLayout() {
    return (
        <div className='main_container'>
            <Header/>
            <SideMenu/>
            {rootRoutes}
            <Footer/>
        </div>
    );
}