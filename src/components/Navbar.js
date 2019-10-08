import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { choosenLanguage } from '../actions';


function Navbar(props) {
    const currLang = useSelector(state => state.userLanguage);
    const dispatch = useDispatch();

    let location = props.location.substring(4);
    console.log(location);

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
                <Link to={`/ru/${location}`} onClick={() => dispatch(choosenLanguage('ru'))}>RU</Link>
                <Link to={`/en/${location}`} onClick={() => dispatch(choosenLanguage('en'))}>EN</Link>
                <Link to={`/et/${location}`} onClick={() => dispatch(choosenLanguage('et'))}>ET</Link>
            </div>
        </nav>
    );
}

export default Navbar;