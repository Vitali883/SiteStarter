import React from 'react';

function ToggleSideMenu(){
    alert('Clicked')
    //document.getElementById('sidemenu').classList.toggle('active');
}

class Logo extends React.Component{
    render(){
        return(
            <div id="Toggle-btn_Logo">
                <div class="toggle-btn" onClick={() => ToggleSideMenu()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <h1>SSLogo</h1>
            </div>
        )
    }    
}
export default Logo
