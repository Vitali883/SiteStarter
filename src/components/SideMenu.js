import React from 'react';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';


function SideMenu(props) {
    let { isVisible, onClose } = props;
    const currLang = useSelector(state => state.userLanguage);

    const siteMenuClasses = [];
    if (isVisible) {
        siteMenuClasses.push('active');
    }

    return (
        <div id='sideMenu' className={siteMenuClasses.join(' ')}>
            <ul>
                <li>
                    <i className='fa fa-bars' aria-hidden='true'></i>
                    <Link to={`/${currLang}/home`} onClick={() => onClose()}>
                        <FormattedMessage id='nav.home' defaultMessage='Home'/>
                    </Link>
                </li>
                <li>
                    <i className='fa fa-users' aria-hidden='true'></i>
                    <Link to={`/${currLang}/about`} onClick={() => onClose()}>
                        <FormattedMessage id='nav.about' defaultMessage='About'/>
                    </Link>
                </li>
                <li>
                    <i className='fa fa-cog' aria-hidden='true'></i>
                    <Link to={`/${currLang}/settings`} onClick={() => onClose()}>
                        <FormattedMessage id='sidebar.settings' defaultMessage='Settings'/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideMenu