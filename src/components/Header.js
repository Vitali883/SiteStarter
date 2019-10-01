import React from 'react';

import Logo from './Logo';
import Navbar from './Navbar';
import UserMenu from './userMenu';


class Header extends React.Component {
    render() {
        return (
            <header>
                <Logo />
                <Navbar />
                <UserMenu />
            </header>
        )
    }
}

export default Header;