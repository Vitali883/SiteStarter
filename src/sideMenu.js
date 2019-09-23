import React from 'react';

function test(){
    alert('here');
}

class SideMenu extends React.Component{
    render(){
        return(
            <div id="sidemenu">
                
                <div class="toggle-btn">
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
