import axios from 'axios';

 export const api = axios.create({
    // baseURL: 'https://oos.xeol.com.ua/', // dev
    baseURL: 'http://oos.xeol.com.ua/api/', // dev
    responseType: "json",
});
let config = {
    headers: {
        ['Authorization'] : `Bearer 06de4e729bde05b6ab50f7a4c794e765e017722f`
    }
  }

export {config}


