import {api} from "./settings";
import d from '../mocData/auth.json';


export const signUp = (data) => {
    return api.get(`https://oos.xeol.com.ua/`);
}
// export const signUp = () =>{
//     return d
//     console.log('d',d)
// }