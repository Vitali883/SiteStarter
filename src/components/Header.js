import React, { useState } from 'react';

import Logo from './Logo';
import Navbar from './Navbar';
import SideMenu from './SideMenu';
import LoginBtn from './LoginBtn';


function Header(props) {
    const [sideMenuState, setSideMenu] = useState({
        isVisibleMenu: false
    });

    return (
        <header>
            <button id="toggleBtnLogo__toggleBtn" onClick={() => setSideMenu({ isVisibleMenu: !sideMenuState.isVisibleMenu }) }>
                <div className='toggleBtn'>
                    <span className='toggleBtn'></span>
                    <span className='toggleBtn'></span>
                    <span className='toggleBtn'></span>
                </div>
            </button>
            <SideMenu isVisible={sideMenuState.isVisibleMenu} />
            <Logo />
            <Navbar location={props.location} />
            {/* <UserMenu /> */}
            <LoginBtn />
        </header>
    )
}

export default Header;