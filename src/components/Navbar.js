import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
                <a href={`/${currLang}/home`}>
                    <FormattedMessage
                        id='nav.home'
                        defaultMessage='Home'
                    />
                </a>
                <a href={`/${currLang}/about`}>
                    <FormattedMessage
                        id='nav.about'
                        defaultMessage='About'
                    />
                </a>
            </div>
            <div id='languages__container'>
                <button onMouseUp={() => reloadPage('ru')} onClick={() => dispatch(choosenLanguage('ru'))}>RU</button>
                <button onMouseUp={() => reloadPage('en')} onClick={() => dispatch(choosenLanguage('en'))}>EN</button>
                <button onMouseUp={() => reloadPage('et')} onClick={() => dispatch(choosenLanguage('et'))}>ET</button>
            </div>
        </nav>
    )
}

export default Navbar;