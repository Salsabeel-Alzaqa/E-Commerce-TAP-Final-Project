import axios from 'axios';
import { getToken } from "../utils/userutils";
const apiClient = axios.create({
  baseURL: 'https://tap-backend-final-3-otnz.onrender.com/api/',
});

apiClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `${token}`;
    }
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