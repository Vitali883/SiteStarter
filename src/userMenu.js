import React from 'react';

class UserMenu extends React.Component{
    render(){
        return(
            <div className="UserMenu">

                <i class="fa fa-bell fa-2x" aria-hidden="true"></i>

                <div className="UserMenu__profile">
                    <img alt="user_img" src="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"/>
                    <p>Maria Zvaginceva</p> 
                </div>
                                                      
            </div>
        )
    }    
}
export default UserMenu
