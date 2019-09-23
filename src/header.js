import React from 'react';
import UserMenu from "./userMenu"
import Logo from "./logo"

class Header extends React.Component{
    render(){
        return(
            <header>
                <h1>Header</h1>
                <Logo />
                <UserMenu />           
            </header>
        )
    }    
}
export default Header
