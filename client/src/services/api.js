import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.API_URL || 'http://dharma.vn:3333/'
});