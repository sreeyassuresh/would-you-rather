import { combineReducers } from 'redux'
import  users  from './users.js'
import  questions  from './questions.js'
import  authedUser  from './authedUser'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers ({
questions,
users,
authedUser,
loadingBar: loadingBarReducer,
})