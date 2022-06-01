// URL da Api: https://api.themoviedb.org/3/movie/now_playing?api_key=8bc0807f00a485ae205d0e186e5b7d45&language=pt-BR

import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default api;