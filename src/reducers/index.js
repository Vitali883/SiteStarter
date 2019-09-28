import loggedReducer from './isLogged'
import signUpReducer from './signUp'
import isLogginViewPageReducer from './loginFormView'
import curr_langReducer from './curr_lang'
import { combineReducers } from 'redux'

const allReducer = combineReducers({
    isLogged: loggedReducer,
    showSignUpPop: signUpReducer,
    isLogginViewPage: isLogginViewPageReducer,
    userLanguage: curr_langReducer
})

export default allReducer;