import { combineReducers } from 'redux';

import userReducer from './user';

import currLangReducer from './currLang';


const allReducer = combineReducers({
    user: userReducer,
    userLanguage: currLangReducer
});

export default allReducer;