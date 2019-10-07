import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Login from './Login';


function UserMenu() {
    const isLogged = useSelector(state => state.isLogged);
    
    const [dropdownState, setDropdown] = useState({
        isVisibleNotificationDropdown: false,
        isVisibleProfileDropdown: false,
        isVisibleLayout: false
    });
    console.log(dropdownState)

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

    if (!isLogged) {
        return (
            <Login />
        );
    }

    return (
        <div className='userMenu'>
            <div className={layoutClasses.join(' ')} onClick={() => setDropdown({ isVisibleLayout: false, isVisibleProfileDropdown: false, isVisibleNotificationDropdown: false  }) } ></div>
            <i id='userMenu__bell' className='fa fa-bell fa-2x' aria-hidden='true' onClick={() => setDropdown({ isVisibleNotificationDropdown: !dropdownState.isVisibleNotificationDropdown, isVisibleLayout: !dropdownState.isVisibleLayout, isVisibleProfileDropdown: false }) }>
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

            <div className='userMenu__profile' onClick={() => setDropdown({ isVisibleProfileDropdown: !dropdownState.isVisibleProfileDropdown, isVisibleLayout: !dropdownState.isVisibleLayout, isVisibleNotificationDropdown: false }) } >
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