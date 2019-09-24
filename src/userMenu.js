import React from 'react';

    function openMenu() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    window.addEventListener("click", function(event) {
        console.log(event.target)
        if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown') && !event.target.matches('.UserMenu__profile_img') && !event.target.matches('.UserMenu__profile') && !event.target.matches('.UserMenu') ) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    });
    

class UserMenu extends React.Component{
    render(){
        return(
            <div className="UserMenu">
                <i id="UserMenu__Bell" class="fa fa-bell fa-2x" aria-hidden="true"><div id="circle">2</div></i>

                <div onMouseDown={() => openMenu()} className="UserMenu__profile">
                    <img class="UserMenu__profile_img" alt="user_img" src="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"/>
                    <div class="dropdown">
                        <button class="dropbtn">Maria Zvaginceva</button>
                        <div id="myDropdown" class="dropdown-content">
                                <a href="#home">Profile</a>
                                <a href="#about">Edit profile</a>
                                <span></span>
                                <a id="logout_btn" href="#login">Logout</a>
                        </div>
                    </div>
                </div>                      
            </div>
        )
    }    
}
export default UserMenu
