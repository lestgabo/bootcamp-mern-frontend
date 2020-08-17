import axios from 'axios'; // wrapper for fetch -> easier to use

const api = axios.create({
    baseURL: 'http://localhost:8000',
});

export default api;
