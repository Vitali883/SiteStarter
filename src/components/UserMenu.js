import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import LoginBtn from './LoginBtn';


function UserMenu() {
    const isLogged = useSelector(state => state.isLogged);

    const [dropdownState, setDropdown] = useState({
        isVisibleNotificationDropdown: false,
        isVisibleProfileDropdown: false,
        isVisibleLayout: false
    });

    const [setUserMenu] = useState({
        isVisibleLayout: false
    });

    const notifDropdownClasses = ['userMenu__dropdown__content'];
    const profileDropdownClasses = ['userMenu__dropdown__content'];
    const layoutClasses = ['userMenu__layout'];

    if (dropdownState.isVisibleNotificationDropdown) {
        notifDropdownClasses.push('show');
        layoutClasses.push('show');
    }

    if (dropdownState.isVisibleProfileDropdown) {
        profileDropdownClasses.push('show');
        layoutClasses.push('show');
    }

    function toggleDropdown(layoutBoolean, notifBoolean, profileBoolean) {
        setDropdown({
            isVisibleNotificationDropdown: notifBoolean,
            isVisibleProfileDropdown: profileBoolean
        });

        setUserMenu({
            isVisibleLayout: layoutBoolean
        });
    }

    if (!isLogged) {
        return (
            <LoginBtn />
        );
    }

    return (
        <div className='userMenu'>
            <div className={layoutClasses.join(' ')} onClick={() => toggleDropdown(false, false, false)} ></div>
            <i id='userMenu__bell' className='fa fa-bell fa-2x' aria-hidden='true' onClick={() => toggleDropdown (true, true, false) }>
                <div className='userMenu__dropdown'>
                    <div id='userMenu__dropdown__circle'>2</div>

                    <div id='userMenu__dropdown__myNotif' className={notifDropdownClasses.join(' ')}>
                        <a href='#profile'>Profile</a>
                        <a href='#about'>Edit profile</a>
                        <span></span>
                        <a id='logoutBtn' href='#login'>Logout</a>
                    </div>
                </div>
            </i>

            <div className='userMenu__profile' onClick={() => toggleDropdown(true, false, true) } >
                <img
                    alt='user_img'
                    src='https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
                />
                <div className='userMenu__dropdown'>
                    <button className='userMenu__dropdown__button'>Maria Zvaginceva</button>

                    <div id='userMenu__dropdown__myDropdown' className={profileDropdownClasses.join(' ')}>
                        <a href='#profile'>Profile</a>
                        <a href='#about'>Edit profile</a>
                        <span></span>
                        <a id='logoutBtn' href='#login'>Logout</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserMenu;