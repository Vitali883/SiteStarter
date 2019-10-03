import React from 'react';
import { useSelector } from 'react-redux';

import Login from './Login';



function openDropdown(id) {
    document
        .getElementById(id)
        .classList
        .toggle('show');
    document
        .getElementById('userMenu__layout')
        .classList
        .toggle('show');
}

window
    .addEventListener('click', function (event) {
        if(event.target.matches('#userMenu__layout')){
           
            let dropdowns = document.getElementsByClassName('userMenu__dropdown__content');
            let i;

            for (i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown
                        .classList
                        .remove('show');

                     document
                        .getElementById('userMenu__layout')
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
            <div id="userMenu__layout"></div>
            <i id='userMenu__bell' className='fa fa-bell fa-2x' aria-hidden='true' onMouseDown={() => openDropdown('userMenu__dropdown__myNotif')}>
                <div className='userMenu__dropdown'>
                    <div id='userMenu__dropdown__circle'>2</div>

                    <div id='userMenu__dropdown__myNotif' className='userMenu__dropdown__content'>
                        <a href='#profile'>Profile</a>
                        <a href='#about'>Edit profile</a>
                        <span></span>
                        <a id='logoutBtn' href='#login'>Logout</a>
                    </div>
                </div>
            </i>

            <div onMouseDown={() => openDropdown('userMenu__dropdown__myDropdown')} className='userMenu__profile'>
                <img
                    alt='user_img'
                    src='https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
                />
                <div className='userMenu__dropdown'>
                    <button className='userMenu__dropdown__button'>Maria Zvaginceva</button>

                    <div id='userMenu__dropdown__myDropdown' className='userMenu__dropdown__content'>
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