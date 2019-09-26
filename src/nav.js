import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <nav className="Navbar">
            <a href="/home">Home</a>
            <a href="/about">About</a>
        </nav>
    )
}
export default Navbar
