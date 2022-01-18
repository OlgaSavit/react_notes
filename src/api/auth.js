import {api,config} from "./settings";

export const signUp = (data) => {
    return api.get(`/user`,config);
}
export const signIn = (data) => {
    console.log('DATA',data)
    return api.get(`/user`,config);
}

// export const signUp = () =>{
//     return d
//     console.log('d',d)
// }