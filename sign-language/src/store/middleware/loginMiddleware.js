import { LoginAPI } from "../../components/LoginPage/LoginAPI"
import { ACTION_LOGIN_ATTEMPTING, ACTION_LOGIN_SUCCESS, loginErrorAction, loginSuccessAction } from "../actions/loginActions"

export const loginMiddleware = ({ dispatch }) => next => action => {
    
    next(action)
    if (action.type === ACTION_LOGIN_ATTEMPTING){
        //make HTTP request
        LoginAPI.login(action.payload)
        .then(profile => {
            dispatch( loginSuccessAction(profile))
        })
        .catch(error => {
            dispatch(loginErrorAction(error))
        })
    }

    if(action.type === ACTION_LOGIN_SUCCESS){
        // Loged inn -> route to translate
    }


}