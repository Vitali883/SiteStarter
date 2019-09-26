import React from 'react';

class Logo extends React.Component {
    render() {
        return (
            <div id="Toggle-btn_Logo">
                <div class="toggle-btn">
                    <span class="toggle-btn"></span>
                    <span class="toggle-btn"></span>
                    <span class="toggle-btn"></span>
                </div>
                <a href="#home">
                    <img id="Logo_img" alt="Site Logo" src="https://cu4.uicdn.net/80e/b03a5dcb0c9c9c6d818b94d5d2c61/webapp/25716-logo-generator.svg" />
                </a>
            </div>
        )
    }
}

export default Logo