// src/api.js
import axios from 'axios';

const API_KEY = ''; 
const BASE_URL = 'https://newsapi.org/v2'; 

export const fetchNews = async (category = 'general', query = '') => {
    try {
        const response = await axios.get(`${BASE_URL}/top-headlines`, {
            params: {
                category,
                q: query,
                apiKey: API_KEY,
                language: 'en',
            },
        });
        return response.data.articles;
    } catch (error) {
        console.error("Error fetching news:", error);
        return [];
    }
};
