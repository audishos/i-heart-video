import axios from 'axios';

let request;

request = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { api_key: process.env.REACT_APP_TMDB_API_KEY, language: 'en-US' },
});

export default request;
