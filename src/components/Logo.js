import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SideMenu from './SideMenu';

function Logo() {
    const currLang = useSelector(state => state.userLanguage);
    const [sideMenuState, setSideMenu] = useState({
        isVisibleMenu: false
    });

    return (
        <div id='toggleBtnLogo'>
            <button id="toggleBtnLogo__toggleBtn" onClick={() => setSideMenu({ isVisibleMenu: !sideMenuState.isVisibleMenu }) }>
                <div className='toggleBtn'>
                    <span className='toggleBtn'></span>
                    <span className='toggleBtn'></span>
                    <span className='toggleBtn'></span>
                </div>
            </button>
            <Link to={`/${currLang}/home`}>
                <img
                    id='logoImg'
                    alt='Site Logo'
                    src='https://cu4.uicdn.net/80e/b03a5dcb0c9c9c6d818b94d5d2c61/webapp/25716-logo-generator.svg'
                />
            </Link>

            <SideMenu isVisible={sideMenuState.isVisibleMenu} />
                        
        </div>
    )
}

export default Logo;