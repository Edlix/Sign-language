import { LoginAPI } from "../../components/LoginPage/LoginAPI"
import { ACTION_LOGIN_CHECKFORUSER, ACTION_LOGIN_USER, 
        loginUserAction, loginSetUser } from "../actions/loginActions"

export const loginMiddleware = ({ dispatch }) => next => async action => {
    
    next(action)

    if (action.type === ACTION_LOGIN_CHECKFORUSER) {
        const user = await LoginAPI.getSpecificUser(action.payload)
        dispatch(loginSetUser(user))
    }

    // if(action.type === ACTION_LOGIN_SELECTEDUSER) {
    //     LoginAPI.login(action.payload)
    //     .then(username =>{
    //         dispatch(loginSelectedUser(username))
    //     })
    // }

    if(action.type === ACTION_LOGIN_USER) {
        LoginAPI.login(action.payload)
        .then(username =>{
            dispatch(loginUserAction(username))
        })
    }
}