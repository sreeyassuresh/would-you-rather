import { SET_AUTHED_USER } from '../actions/authedUser.js'

export default function authedUser ( state = '' , action) {
    switch (action.type) {
        case SET_AUTHED_USER :
            return action.authedUser
            default :
            return state
    }
}