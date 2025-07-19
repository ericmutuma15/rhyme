// src/utils/api.js
// Utility to get the correct API base URL depending on environment

const isProd = import.meta.env.PROD;
export const API_BASE = isProd
  ? 'https://rhyme-xn72.onrender.com/api'
  : '/api';
