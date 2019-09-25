import loggedReducer from './isLogged'
import counterReducer from './counter'
import signUpReducer from './signUp'
import isLogginViewPageReducer from './loginFormView'
import { combineReducers } from 'redux'

const allReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    showSignUpPop: signUpReducer,
    isLogginViewPage: isLogginViewPageReducer
})

export default allReducer;