import React from 'react';
import './App.css';

import Header from "./header"
import Footer from "./footer"
import SideMenu from "./sideMenu"

function App() {
  return (
    <div>
        <Header />
        <SideMenu />
        <Footer />
    </div>
  );
}

export default App;