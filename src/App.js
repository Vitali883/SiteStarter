import React from 'react';
import './App.css';

import Header from "./header"
import Footer from "./footer"
import SideMenu from "./sideMenu"
import UserMenu from "./userMenu"
import Logo from "./logo"

function App() {
  return (
    <div>
        <Header />
        <SideMenu />
        <Logo />
        <UserMenu />
        <Footer />
    </div>
  );
}

export default App;