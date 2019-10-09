import { combineReducers } from 'redux';

import loggedReducer from './isLogged';

import currLangReducer from './currLang';


const allReducer = combineReducers({
    isLogged: loggedReducer,
    userLanguage: currLangReducer
});

export default allReducer;