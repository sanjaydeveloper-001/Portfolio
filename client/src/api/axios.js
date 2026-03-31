import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://portserverapi.vercel.app/user',
});

export default API; 