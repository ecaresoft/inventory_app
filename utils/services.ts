import axios from 'axios';

export const url = '';
// export const url = '';

const instance = axios.create({
  // .. where we make our configurations
  baseURL: url,
  // withCredentials: true,
  headers: {
    'Content-type': 'application/x-www-form-urlencoded',
    // 'Access-Control-Allow-Origin': '',
    // "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
  },
  timeout: 60000,
});

export default instance;
