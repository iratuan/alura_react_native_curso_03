import axios from 'axios'

const api = axios.create({
    baseURL: "http://192.168.100.237:3000/"
});

export default api;

 