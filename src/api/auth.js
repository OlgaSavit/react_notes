import {api} from "./settings";
import d from '../mocData/auth.json';


export const signUp = data => api.get(`https://jsonplaceholder.typicode.com/posts/1`);
// export const signUp = () =>{
//     return d
//     console.log('d',d)
// }