import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.SERVER_HOST,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'  
});

export default axiosClient;