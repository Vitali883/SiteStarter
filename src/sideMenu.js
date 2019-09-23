import React from 'react';

function test(){
    alert('here');
}

class SideMenu extends React.Component{
    render(){
        return(
            <div>
                <p onClick={() => test()}>SideMenu</p>
            </div>
        )
    }    
}
export default SideMenu
