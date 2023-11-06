import axios from 'axios';

const Client = axios.create({
  baseURL: 'https://tap-backend-final-3-otnz.onrender.com/api/'
});

Client.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Client;