import React from 'react';

window.onclick = function(event) {
    if (event.target.className === "toggle-btn") {        
        document.getElementById('SideMenu').classList.toggle('active');    
    }
}

class SideMenu extends React.Component{
    render(){
        return(
            <div id="SideMenu">
                <ul>
                    <li><i class="fa fa-bars" aria-hidden="true"></i>Dashboard</li>
                    <li><i class="fa fa-users" aria-hidden="true"></i>Users</li>
                    <li><i class="fa fa-pencil-square-o" aria-hidden="true"></i>Posts</li>
                    <li><i class="fa fa-cog" aria-hidden="true"></i>Settings</li>
                </ul>
            </div>
        )
    }    
}
export default SideMenu
