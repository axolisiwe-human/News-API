// src/App.js
import React, { useState, useEffect } from 'react';
import { fetchNews } from './api';
import './App.css';

const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

function App() {
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState('general');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const getNews = async () => {
            const fetchedNews = await fetchNews(category, searchQuery);
            setArticles(fetchedNews);
        };

        getNews();
    }, [category, searchQuery]);

    return (
        <div className="App">
            <h1>News App</h1>
            <div className="filters">
                <select onChange={(e) => setCategory(e.target.value)} value={category}>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="news-list">
                {articles.length > 0 ? (
                    articles.map((article, index) => (
                        <div key={index} className="news-item">
                            <h2>{article.title}</h2>
                            <img className='image' src={article.urlToImage} alt={article.urlToImage}/>
                            <p>{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                        </div>
                    ))
                ) : (
                    <p>No news found</p>
                )}
            </div>
        </div>
    );
}

export default App;
