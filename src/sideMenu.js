import React from 'react';

window.addEventListener("click", function (event) {
    if (event.target.className === "toggle-btn") {
        document
            .getElementById('SideMenu')
            .classList
            .toggle('active');
    }
    if(event.target.className === "Sign_in_btn"){
        document
            .getElementById('SideMenu')
            .classList
            .remove('active');
    }
});

class SideMenu extends React.Component {
    render() {
        return (
            <div id="SideMenu">
                <ul>
                    <li>
                        <i className="fa fa-bars" aria-hidden="true"></i>Dashboard</li>
                    <li>
                        <i className="fa fa-users" aria-hidden="true"></i>Users</li>
                    <li>
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>Posts</li>
                    <li>
                        <i className="fa fa-cog" aria-hidden="true"></i>Settings</li>
                </ul>
            </div>
        )
    }
}
export default SideMenu
