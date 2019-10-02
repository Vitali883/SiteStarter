import React from 'react';
import {useSelector} from 'react-redux';
import {FormattedMessage} from 'react-intl'

window.addEventListener('click', function (event) {
    if (event.target.className === 'toggleBtn') {
        document
            .getElementById('sideMenu')
            .classList
            .toggle('active');
    }
    if (event.target.className === 'signInBtn') {
        document
            .getElementById('sideMenu')
            .classList
            .remove('active');
    }
});

function SideMenu() {
    const currLang = useSelector(state => state.userLanguage);

    return (
        <div id='sideMenu'>
            <ul>
                <li>
                    <i className='fa fa-bars' aria-hidden='true'></i>
                    <a href={`/${currLang}/home`}>
                        <FormattedMessage id='nav.home' defaultMessage='Home'/>
                    </a>
                </li>
                <li>
                    <i className='fa fa-users' aria-hidden='true'></i>
                    <a href={`/${currLang}/about`}>
                        <FormattedMessage id='nav.about' defaultMessage='About'/>
                    </a>
                </li>
                <li>
                    <i className='fa fa-cog' aria-hidden='true'></i>
                    <a href={`/${currLang}/settings`}>
                        <FormattedMessage id='sidebar.settings' defaultMessage='Settings'/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SideMenu