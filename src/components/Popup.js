import React from 'react';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';


function Popup(props) {
    const { header, children, onClose } = props;
    const currLang = useSelector(state => state.userLanguage);

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
                    <Link to={`/${currLang}/registration`}>
                        <button onClick={() => onClose()}>
                            <i className='fa fa-user fa-2x' aria-hidden='true'></i>
                            <FormattedMessage
                                id='signin.create_account'
                                defaultMessage='Create account'
                            />                        
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Popup;