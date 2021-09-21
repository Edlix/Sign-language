import { ACTION_LOGIN_ATTEMPTING, ACTION_LOGIN_SUCCESS } from "../actions/loginActions"

export const loginMiddleware = ({ dispatch }) => next => action => {
    
    next(action)
    if (action.type === ACTION_LOGIN_ATTEMPTING){
        //make HTTP request

    }

    if(action.type === ACTION_LOGIN_SUCCESS){
        // Loged inn -> route to translate
    }


}