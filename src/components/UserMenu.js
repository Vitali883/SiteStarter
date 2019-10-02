import React from 'react';
import { useSelector } from 'react-redux';

import Login from './Login';


function openMenu() {
    document
        .getElementById('userMenu__dropdown__myDropdown')
        .classList
        .toggle('show');
}

function openNotifications() {
    document
        .getElementById('userMenu__dropdown__myNotif')
        .classList
        .toggle('show');
}

window
    .addEventListener('click', function (event) {
        if (
            !event.target.matches('.userMenu__dropdown__button') && 
            !event.target.matches('.userMenu__dropdown') && 
            !event.target.matches('.userMenu__profile') && 
            !event.target.matches('.userMenu') &&
            !event.target.matches('.fa')
            ) 
        {
            var dropdowns = document.getElementsByClassName('userMenu__dropdown__content');
            var i;

            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown
                        .classList
                        .remove('show');
                }
            }
        }
    });

function UserMenu() {
    const isLogged = useSelector(state => state.isLogged);

    if (!isLogged) {
        return (
            <Login />
        );
    }

    return (
        <div className='userMenu'>
            <i id='userMenu__bell' class='fa fa-bell fa-2x' aria-hidden='true' onMouseDown={() => openNotifications()}>
                <div class='userMenu__dropdown'>
                    <div id='userMenu__dropdown__circle'>2</div>

                    <div id='userMenu__dropdown__myNotif' class='userMenu__dropdown__content'>
                        <a href='#profile'>Profile</a>
                        <a href='#about'>Edit profile</a>
                        <span></span>
                        <a id='logoutBtn' href='#login'>Logout</a>
                    </div>
                </div>
            </i>

            <div onMouseDown={() => openMenu()} className='userMenu__profile'>
                <img
                    alt='user_img'
                    src='https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
                />
                <div class='userMenu__dropdown'>
                    <button class='userMenu__dropdown__button'>Maria Zvaginceva</button>

                    <div id='userMenu__dropdown__myDropdown' class='userMenu__dropdown__content'>
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