import { combineReducers } from 'redux'
import { RootState } from './types'
const initialState: RootState = {
    userName: '',
    userCode: ''
}

interface UserAction {
    type: 'USERINFO',
    payload: string
}
type AnyAction = {
    [key: string]: any
}
type Action = UserAction | AnyAction

function userReducer(state = initialState, action: Action) {
    return state + action.payload
}


export default combineReducers({
    user: userReducer
})