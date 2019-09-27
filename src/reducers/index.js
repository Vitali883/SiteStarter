import loggedReducer from './isLogged'
import counterReducer from './counter'
import signUpReducer from './signUp'
import isLogginViewPageReducer from './loginFormView'
import curr_langReducer from './curr_lang'
import { combineReducers } from 'redux'

const allReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    showSignUpPop: signUpReducer,
    isLogginViewPage: isLogginViewPageReducer,
    userLanguage: curr_langReducer
})

export default allReducer;