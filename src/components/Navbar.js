import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { choosenLanguage } from '../actions';


function Navbar() {
    const currLang = useSelector(state => state.userLanguage);
    const dispatch = useDispatch();

    return(
        <nav className='navbar'>
            <div>
                <Link to={`/${currLang}`}>
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
            <div id='navbar__languageContainer'>
                <Link to='/ru' onClick={() => dispatch(choosenLanguage('ru'))}>RU</Link>
                <Link to='/en' onClick={() => dispatch(choosenLanguage('en'))}>EN</Link>
                <Link to='/et' onClick={() => dispatch(choosenLanguage('et'))}>ET</Link>
            </div>
        </nav>
    )
}

export default Navbar;