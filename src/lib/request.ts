import axios from 'axios';

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

request.interceptors.request.use((config) => {
  return config;
});

console.log(import.meta.env.VITE_API_BASE_URL);

export default request;
