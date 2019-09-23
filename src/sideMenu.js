import React from 'react';

function ToggleSideMenu(){
    document.getElementById('sidemenu').classList.toggle('active');
}

class SideMenu extends React.Component{
    render(){
        return(
            <div id="sidemenu">
                <div class="toggle-btn" onClick={() => ToggleSideMenu()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul>
                    <li>Users</li>
                    <li>Posts</li>
                    <li>Settings</li>
                </ul>
            </div>
        )
    }    
}
export default SideMenu
