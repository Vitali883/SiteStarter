import React from 'react';
import UserMenu from "./userMenu"
import Logo from "./logo"

class Header extends React.Component {
    render() {
        return (
            <header>
                <Logo/>
                <UserMenu/>
            </header>
        )
    }
}
export default Header
