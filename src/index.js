import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux';
import allReducer from './reducers';
import {Provider} from 'react-redux';


function saveToLocalStorage(state) {
    try {
        const stateConfig = {
            userLanguage: state.userLanguage,
            isLogged: state.isLogged
        }
        const serializedState = JSON.stringify(stateConfig);
        localStorage.setItem('state', serializedState)
    } catch (e) {
        console.log(e)
    }
}

function loadFromLocalStorage() {
    try {
        let curr_url = window.location.href
        let splited_url = curr_url.split('/')
        let lang = splited_url[3];

        if (lang !== "en" && lang !== "ru" && lang !== "et") {
            lang = "en"
        }
        
        let serializedState = localStorage.getItem('state')
        
        if (serializedState === null){
            const stateConfig = { userLanguage: lang, isLogged: false }
            const state = JSON.stringify(stateConfig);
            localStorage.setItem('state', state)
            window.location.reload()
            return undefined
        }
        
        let temp = JSON.parse(serializedState); 
        temp.userLanguage = lang;
        return temp
    } catch (e) {
        console.log(e)
        return undefined
    }
}

const persistedState = loadFromLocalStorage()

let store = createStore(allReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),);

store.subscribe(() => saveToLocalStorage(store.getState()))


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();