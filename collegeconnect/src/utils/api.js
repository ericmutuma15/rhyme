// src/utils/api.js
// Utility to get the API base URL. Prefer VITE_API_BASE (overrides in Vercel or .env).
export const API_BASE = import.meta.env.VITE_API_BASE || 'https://rhyme-xn72.onrender.com/api';
