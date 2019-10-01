import { combineReducers } from 'redux'

import loggedReducer from './isLogged'
import signUpReducer from './signUp'
import isLogginViewPageReducer from './loginFormView'

import currLangReducer from './currLang'


const allReducer = combineReducers({
    isLogged: loggedReducer,
    showSignUpPop: signUpReducer,
    isLogginViewPage: isLogginViewPageReducer,
    userLanguage: currLangReducer
});

export default allReducer;