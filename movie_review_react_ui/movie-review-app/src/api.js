import axios from 'axios';

const api = axios.create({
  baseURL: 'http://13.126.212.61:8001',
});

export default api;
