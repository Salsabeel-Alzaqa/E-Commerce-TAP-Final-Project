import axios from 'axios';

const customAxios = (token) => {
  const apiClient = axios.create({
    baseURL: 'https://tap-backend-final-3-otnz.onrender.com/api/',
  });

  apiClient.interceptors.request.use(
    (config) => {
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
      if (response.status === 401) {
        alert("You are not authorized");
        localStorage.removeItem('token');
      }
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return apiClient;
};
export default customAxios;