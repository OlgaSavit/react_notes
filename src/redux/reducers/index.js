import {LOGOUT, SIGN_UP_ERROR, SIGN_UP_SUCCESS} from "../actionsType";

const initialState={
    infoUser:{},
    auth:false,
    isErrorAuth:false,

}
 const reducer=(state=initialState,action)=>{
    switch (action.type){
        case SIGN_UP_SUCCESS:{
            return {...state, auth: action.payload?true:false, infoUser:action.payload}
        }
        case SIGN_UP_ERROR:{
            console.log(action)
            return {...state, isErrorAuth: action.payload}
        }
        case LOGOUT:{
            return {...state, infoUser: {}, auth: false}
        }
        case 'ADD':{
            return 'olga'
        }
        case 'DEC':{
            return state-1
        }
        default: return  state
    }
 }
 export {reducer}