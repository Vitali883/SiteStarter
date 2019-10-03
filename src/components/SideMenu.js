import React from 'react';
import {useSelector} from 'react-redux';
import {FormattedMessage} from 'react-intl'


function SideMenu(props) {
    let { isVisible } = props;
    const currLang = useSelector(state => state.userLanguage);

    const siteMenuClasses = [];
    if (isVisible) {
        siteMenuClasses.push('active');
    }

    return (
        <div id='sideMenu' class={siteMenuClasses.join(' ')}>
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