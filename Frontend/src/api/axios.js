import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api', // Adjust as needed
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    // Attach JWT token if available
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;