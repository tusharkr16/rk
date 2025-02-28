import axios from 'axios';
import Cookies from "js-cookie";


export const axiosInstance = axios.create({
  baseURL: "https://repaykarobackend.onrender.com",
});

axiosInstance.interceptors.request.use(config => {
  const token = Cookies.get("token");
  config.headers['token'] = token ? token : '';
  return config;
});
