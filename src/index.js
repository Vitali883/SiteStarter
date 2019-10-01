import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

import allReducer from './reducers';

import './index.css';
import App from './App';

import { choosenLanguage } from './actions';

import siteConfig from './site-config';


function loadUserSession() {
    try {
        let currUrl = window.location.href;
        let splitedUrl = currUrl.split('/');
        let lang = splitedUrl[3];

        if (siteConfig.languages.indexOf(lang) === -1) {
            lang = siteConfig.defaultLanguage;
        }
        
        let serializedState = localStorage.getItem('state');
        
        if (serializedState === null) {
            const stateConfig = { userLanguage: lang, isLogged: false };
            const state = JSON.stringify(stateConfig);
            localStorage.setItem('state', state);
            //window.location.reload(); // TODO
            return undefined;
        }
        
        let userState = JSON.parse(serializedState); // TODO
        userState.userLanguage = lang;
        return userState;
    } catch (e) {
        console.log(e);
        return undefined;
    }
}


function saveUserStateToLocalStorage(state) {
    try {
        const stateConfig = {
            userLanguage: state.userLanguage,
            isLogged: state.isLogged
        };
        const serializedState = JSON.stringify(stateConfig);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.log(e);
    }
}

serviceWorker.unregister();

const userState = loadUserSession();

let store = createStore(allReducer, userState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

if (userState) {
    store.dispatch(choosenLanguage(userState.userLanguage));
}

store.subscribe(() => saveUserStateToLocalStorage(store.getState()));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
