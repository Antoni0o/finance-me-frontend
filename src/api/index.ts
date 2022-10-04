import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://finance-me-backend-production.up.railway.app'
}) 