import React from 'react';

function Popup(props) {
    const {header, children, onClose} = props;

    return (
        <div className='popup'>
            <div className='popup__inner'>
                <div id='popup__inner__header'>
                    <h1>
                        {header}
                    </h1>
                    <button onClick={() => onClose()}>X</button>
                </div>
                <div id='popup__inner__content'>
                    {children}
                </div>                
            </div>
        </div>
    );
}

export default Popup;