import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pibd.herokuapp.com/'
});

export default api;