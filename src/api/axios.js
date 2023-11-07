import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://tap-backend-final-3-otnz.onrender.com/api/'
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;