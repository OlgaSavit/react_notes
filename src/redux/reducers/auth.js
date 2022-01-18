import {CHANGE_THEME, LOGOUT, SIGN_IN_ERROR, SIGN_IN_SUCCESS, SIGN_UP_ERROR, SIGN_UP_SUCCESS} from "../actionsType";

const initialState={
    infoUser:{},
    theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches?'light':'black',
    auth:true,
    isErrorAuth:false,

}
 const reducer=(state=initialState,action)=>{
    switch (action.type){
        case SIGN_IN_SUCCESS:{
            return {...state, auth: action.payload?true:false, infoUser:action.payload}
        }
        case SIGN_IN_ERROR:{
            return {...state, isErrorAuth: action.payload}
        }
        case LOGOUT:{
            return {...state, infoUser: {}, auth: false}
        }
        case CHANGE_THEME:{
            return {...state,theme: action.payload}
        }
        default: return  state
    }
 }
 export default reducer