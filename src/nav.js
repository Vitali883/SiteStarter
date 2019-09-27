import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {choosen_language} from './actions'

function reloadPage(lang){
    let first_half_url = "http://vps707430.ovh.net:3000/"+lang

    let curr_url = window.location.href
    let a = curr_url.split('/')
    let seconds_half_url = "";

    for(let i = 4;i<a.length;i++){
        seconds_half_url+='/'+a[i];
    }
    const full_url = first_half_url+seconds_half_url
    window.location.href = full_url;
}

function Navbar() {
    const curr_lang = useSelector(state => state.userLanguage);
    const dispatch = useDispatch();

    return(
        <nav className="Navbar">
            <div>
                <a href={"/" + curr_lang + "/home"}>Home</a>
                <a href={"/" + curr_lang + "/about"}>About</a>
            </div>
            <div>
                <button onMouseUp={() => reloadPage('ru')} onClick={() => dispatch(choosen_language('ru'))}>RU</button>
                <button onMouseUp={() => reloadPage('en')} onClick={() => dispatch(choosen_language('en'))}>EN</button>
                <button onMouseUp={() => reloadPage('et')} onClick={() => dispatch(choosen_language('et'))}>ET</button>
            </div>
        </nav>
    )
}
export default Navbar
