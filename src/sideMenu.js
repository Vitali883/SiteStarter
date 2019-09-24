import React from 'react';

class SideMenu extends React.Component{
    render(){
        return(
            <div class="SideMenu">
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
