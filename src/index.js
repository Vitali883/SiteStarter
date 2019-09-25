import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { createStore } from 'redux';
import allReducer from './reducers';
import { Provider } from 'react-redux';

// called when state changed (Redux state)
function saveToLocalStorage(state){
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState)
    }catch(e){
        console.log(e)
    }
}

// called on createStore (for example on refresh)
function loadFromLocalStorage(){
    try{
        const serializedState = localStorage.getItem('state')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    }catch(e){
        console.log(e)
        return undefined
    }
}

const persistedState = loadFromLocalStorage()

let store = createStore(
    allReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => saveToLocalStorage(store.getState())) // subscribe - if state changed calling the save function

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();