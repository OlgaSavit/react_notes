import {SIGN_UP_SUCCESS, SIGN_UP_ERROR, LOGOUT, CHANGE_THEME} from "../actionsType";
import {signUp} from "../../api/auth";
import store, {getStore} from "../../store";

// export const isAuth=(payload)=>dispatch=>{
//     // let d=signUp();
//     console.log('11',payload)
//     signUp().then(response => {
//         dispatch({
//             type:SIGN_UP_SUCCESS,
//             payload:true
//         })
//         console.log('resp',response)
//         return response;
//     })
//     .catch(error => {
//         dispatch({
//             type:SIGN_UP_ERROR,
//             payload:payload
//         })
//         console.log('error')
//         return error;
//     });
//     return{ type:SIGN_UP_SUCCESS, payload:payload}
// }
export const isAuth=(payload)=>dispatch=>{
    signUp()
        .then((response) => {
                return response.data
        },error=>{
            dispatch({
                type:SIGN_UP_ERROR,
                payload:true
             })  
        }).then(data =>  dispatch({
            type:SIGN_UP_SUCCESS,
            payload:data
         })
     )
        
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
