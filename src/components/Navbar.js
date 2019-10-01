import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { choosenLanguage } from '../actions';

import siteConfig from  '../site-config';


function reloadPage(lang) {
    return;
    let firstHalfUrl = siteConfig['url'] + lang;

    let currUrl = window.location.href
    let urlSegs = currUrl.split('/')
    let secondsHalfUrl = '';

    for (let i = 4; i < urlSegs.length; i++) {
        secondsHalfUrl += '/' + urlSegs[i];
    }

    const fullUrl = firstHalfUrl + secondsHalfUrl;
    window.location.href = fullUrl;
}


function Navbar() {
    const currLang = useSelector(state => state.userLanguage);
    const dispatch = useDispatch();

    return(
        <nav className='Navbar'>
            <div>
                <Link to={`/${currLang}/home`}>
                    <FormattedMessage
                        id='nav.home'
                        defaultMessage='Home'
                    />
                </Link>
                <Link to={`/${currLang}/about`}>
                    <FormattedMessage
                        id='nav.about'
                        defaultMessage='About'
                    />
                </Link>
            </div>
            <div id='languages__container'>
                <button onClick={() => dispatch(choosenLanguage('ru'))}>RU</button>
                <button onClick={() => dispatch(choosenLanguage('en'))}>EN</button>
                <button onClick={() => dispatch(choosenLanguage('et'))}>ET</button>
            </div>
        </nav>
    )
}

export default Navbar;