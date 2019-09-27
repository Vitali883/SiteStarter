import React from 'react';
import Login from './login';
import {useSelector} from 'react-redux';

function openMenu() {
    document
        .getElementById("myDropdown")
        .classList
        .toggle("show");
}

function openNotifications() {
    document
        .getElementById("myNotifDropdown")
        .classList
        .toggle("show");
}

window
    .addEventListener("click", function (event) {
        if (
            !event.target.matches('.dropbtn') && 
            !event.target.matches('.dropdown') && 
            !event.target.matches('.UserMenu__profile_img') && 
            !event.target.matches('.UserMenu__profile') && 
            !event.target.matches('.UserMenu') &&
            !event.target.matches('.dropbtn2') && 
            !event.target.matches('.dropdown') && 
            !event.target.matches('.fa') && 
            !event.target.matches('.UserMenu')
            ) 
        {
            var dropdowns = document.getElementsByClassName("dropdown-content");
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

    if (isLogged) {
        return (
            <div className="UserMenu">
                <i id="UserMenu__Bell" class="fa fa-bell fa-2x" aria-hidden="true" onMouseDown={() => openNotifications()}>
                    <div class="dropdown">
                        <div class="dropbtn2" id="circle">2</div>

                        <div id="myNotifDropdown" class="dropdown-content">
                            <a href="#profile">Profile</a>
                            <a href="#about">Edit profile</a>
                            <span></span>
                            <a id="logout_btn" href="#login">Logout</a>
                        </div>
                    </div>
                </i>

                <div onMouseDown={() => openMenu()} className="UserMenu__profile">
                    <img
                        class="UserMenu__profile_img"
                        alt="user_img"
                        src="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"/>
                    <div class="dropdown">
                        <button class="dropbtn">Maria Zvaginceva</button>

                        <div id="myDropdown" class="dropdown-content">
                            <a href="#profile">Profile</a>
                            <a href="#about">Edit profile</a>
                            <span></span>
                            <a id="logout_btn" href="#login">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (<Login/>)
    }

}

export default UserMenu