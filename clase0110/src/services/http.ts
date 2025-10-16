import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

http.interceptors.request.use((config) => {
  console.debug('[HTTP] Request', config.method?.toUpperCase(), config.url);
  return config;
});

http.interceptors.response.use(
  (response) => {
    console.debug('[HTTP] Response', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('[HTTP] Error', error?.response?.status, error?.config?.url);
    return Promise.reject(error);
  },
);
