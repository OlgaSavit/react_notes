import {api,config} from "./settings";
import d from '../mocData/auth.json';

export const signUp = (data) => {
    return api.get(`/user`,config);
}

// export const signUp = () =>{
//     return d
//     console.log('d',d)
// }