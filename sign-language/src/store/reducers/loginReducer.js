import {ACTION_LOGIN_CHECKFORUSER, ACTION_LOGIN_SELECTEDUSER, ACTION_LOGIN_SETUSER, ACTION_LOGIN_USER } 
from "../actions/loginActions"

const initalState = {
    username: "",
    translations: [],
    userExists: false,
}

export const loginReducer = (state = initalState, action) => {
    
    switch(action.type){

        case ACTION_LOGIN_USER:
            return{
                ...state,
                username: action.payload,
                translations: []
            }
            
        case ACTION_LOGIN_CHECKFORUSER:
            console.log("Payload: ", action.payload)
            return{
                ...state,
                username: action.payload,
            }

        case ACTION_LOGIN_SELECTEDUSER:
            return{
                ...state,
                userExists: true,
                username: action.payload,
            }   
        case ACTION_LOGIN_SETUSER:
            return action.payload
        default:
            return state
    }
}