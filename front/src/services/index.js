import axios from 'axios';

const api = axios.create({
    baseURL: 'https://digital-booking.herokuapp.com/'
});

export default api;