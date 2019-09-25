import loggedReducer from './isLogged'
import counterReducer from './counter'
import signUpReducer from './signUp'
import { combineReducers } from 'redux'

const allReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    showSignUpPop: signUpReducer
})

export default allReducer;