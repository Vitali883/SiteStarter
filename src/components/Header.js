import React from 'react';

import Logo from './Logo';
import Navbar from './Navbar';
import UserMenu from './UserMenu';


class Header extends React.Component {
    render(props) {
        return (
            <header>
                <Logo />
                <Navbar location={this.props.location} />
                <UserMenu />
            </header>
        )
    }
}

export default Header;