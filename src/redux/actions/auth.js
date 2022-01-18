import {
    SIGN_UP_SUCCESS,
    SIGN_UP_ERROR,
    LOGOUT,
    CHANGE_THEME,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
} from "../actionsType";
import {signIn, signUp} from "../../api/auth";
import { toast } from "react-toastify";

export const isAuth=(data)=>dispatch=>{
    return signIn(data)
        .then((response) => {
            dispatch({
                type:SIGN_IN_SUCCESS,
                payload: response.data
            })
            toast.success("sucess auth");
                return response.data
        }).catch(error => {
            dispatch({
                type: SIGN_IN_ERROR,
                payload: error.message,
            });
            toast.error(error.message);
            return error;
        });
        
    // return{ type:SIGN_UP_SUCCESS, payload:payload}
}
export const logout=(payload)=>dispatch=>{
    dispatch({
        type:LOGOUT,
    })
}
export const changeTheme=(payload)=>dispatch=>{
    console.log('payload',payload)
    dispatch({
        type:CHANGE_THEME,
        payload:payload
    })
}
