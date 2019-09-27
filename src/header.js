import React from 'react';
import UserMenu from "./userMenu"
import Logo from "./logo"
import Navbar from './nav'

class Header extends React.Component {
    render() {
        return (
            <header>
                <Logo/>
                <Navbar />
                <UserMenu/>
            </header>
        )
    }
}

export default Header
