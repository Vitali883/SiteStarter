import React from 'react';
import { FormattedMessage } from 'react-intl';

function Popup(props) {
    const { header, children, onClose } = props;

    return(
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
                <div id='popup__inner__footer'>
                    <button>
                        <i className='fa fa-user fa-2x' aria-hidden='true'></i>
                        <FormattedMessage id='signin.create_account' defaultMessage='Create account'/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Popup;