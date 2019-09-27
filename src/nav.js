import React from 'react'
import { useSelector } from 'react-redux';

function Navbar() {
    const curr_lang = useSelector(state => state.userLanguage);

    return(
        <nav className="Navbar">
            <a href={"/" + curr_lang + "/home"}>Home</a>
            <a href={"/" + curr_lang + "/about"}>About</a>
        </nav>
    )
}
export default Navbar
