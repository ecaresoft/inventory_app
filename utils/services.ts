import axios from 'axios';

export const url = 'http://34.212.36.240:6081/eCareSoftWeb/';
// export const url = '';

const instance = axios.create({
  // .. where we make our configurations
  baseURL: url,
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': 'http://34.212.36.240:6081/eCareSoftWeb/',
    // "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
  },
  timeout: 60000,
});

export default instance;
