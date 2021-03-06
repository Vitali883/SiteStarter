import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Logo() {
    const currLang = useSelector(state => state.userLanguage);

    return (
        <div id='toggleBtnLogo'>
            <Link to={`/${currLang}/home`}>
                <img
                    id='logoImg'
                    alt='Site Logo'
                    src='https://cu4.uicdn.net/80e/b03a5dcb0c9c9c6d818b94d5d2c61/webapp/25716-logo-generator.svg'
                />
            </Link>
        </div>
    )
}

export default Logo;