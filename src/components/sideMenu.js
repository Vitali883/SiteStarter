import React from 'react';
import {useSelector} from 'react-redux';
import {FormattedMessage} from 'react-intl'

window.addEventListener("click", function (event) {
    if (event.target.className === "toggle-btn") {
        document
            .getElementById('SideMenu')
            .classList
            .toggle('active');
    }
    if (event.target.className === "Sign_in_btn") {
        document
            .getElementById('SideMenu')
            .classList
            .remove('active');
    }
});

function SideMenu() {
    const curr_lang = useSelector(state => state.userLanguage);

    return (
        <div id="SideMenu">
            <ul>
                <li>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                    <a href={"/" + curr_lang + "/home"}>
                        <FormattedMessage id="nav.home" defaultMessage="Home"/>
                    </a>
                </li>
                <li>
                    <i className="fa fa-users" aria-hidden="true"></i>
                    <a href={"/" + curr_lang + "/about"}>
                        <FormattedMessage id="nav.about" defaultMessage="About"/>
                    </a>
                </li>
                <li>
                    <i className="fa fa-cog" aria-hidden="true"></i>
                    <a href={"/" + curr_lang + "/settings"}>
                        <FormattedMessage id="sidebar.settings" defaultMessage="Settings"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SideMenu