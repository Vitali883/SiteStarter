import React from 'react';


function Popup(props) {
    const { header, children, onClose } = props;

    return(
        <div className='popup'>
            <div className='popup_inner'>
                <div id='popUp_Header'>
                    <h1>
                        {header}
                    </h1>
                    <button onClick={() => onClose()}>X</button>
                </div>
                <div id='popUp_Content'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Popup;