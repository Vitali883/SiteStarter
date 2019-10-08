import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Logo from './Logo';
import Navbar from './Navbar';
import UserMenu from './UserMenu';
import SideMenu from './SideMenu';


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
            <UserMenu />
        </header>
    )
}

export default Header;