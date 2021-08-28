import axios from 'axios';

export const api = axios.create({
    // baseURL: 'https://oos.xeol.com.ua/', // dev
    baseURL: 'https://jsonplaceholder.typicode.com/' // dev
});


