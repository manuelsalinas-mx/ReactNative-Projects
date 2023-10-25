import axios from 'axios';

const moviesAPI = axios.create({

    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        language: 'es-ES',
        api_key: '2a60d0d48fb45b0054a05b71d5a1418e'
    }
});

export default moviesAPI;
