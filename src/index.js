import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux';
import allReducer from './reducers';
import {Provider} from 'react-redux';


function saveToLocalStorage(state) {
    console.log("Save");
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
    console.log("Load");
    try {
        let serializedState = localStorage.getItem('state')
        if (serializedState === null) 
            return undefined
        
        let curr_url = window.location.href
        let a = curr_url.split('/')
        let lang = a[3];
        let temp = JSON.parse(serializedState);

        if (lang != "en" && lang != "ru" && lang != "et") {
            lang = "en"
        }

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