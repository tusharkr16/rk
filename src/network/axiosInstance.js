import axios from 'axios';


export const axiosInstance = axios.create({
  baseURL: "https://repaykarobackend.onrender.com/auth/login",
});

axiosInstance.interceptors.request.use(config => {
  const token =
    typeof window !== 'undefined' ? window.localStorage.getItem('token') : '';
  const clientId =
    typeof window !== 'undefined'
      ? window.localStorage.getItem('clientId')
      : '';
  config.headers['auth-token'] = token ? token : '';
  config.headers['client-id'] = clientId ? clientId : '';
  return config;
});