import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './about'
import Home from './home'

import {choosen_language} from './actions';
import { useSelector, useDispatch } from 'react-redux';

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

function Content() {    
    const curr_lang = useSelector(state => state.userLanguage);
    const dispatch = useDispatch();

    return(
        <main>
            <button onMouseUp={() => reloadPage('ru')} onClick={() => dispatch(choosen_language('ru'))}>RU</button>
            <button onMouseUp={() => reloadPage('en')} onClick={() => dispatch(choosen_language('en'))}>EN</button>
            <button onMouseUp={() => reloadPage('et')} onClick={() => dispatch(choosen_language('et'))}>ET</button>

            <Router>
                <Switch>               
                    <Route path={"/" + curr_lang + "/about"} component={About} />
                    <Route path={"/" + curr_lang + "/home"} component={Home} />
                </Switch>                
            </Router>
        </main>
    )      
}
export default Content
