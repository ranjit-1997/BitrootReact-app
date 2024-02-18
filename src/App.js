import React, { useState, useEffect } from 'react';
import ArticleCard from './components/ArticleCard';
import Modal from './components/Modal';
import './App.css';

const API_URL = 'https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts';

function App() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const handleLearnMore = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="App">
      <h1>Articles</h1>
      <div className="article-container">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            onLearnMore={handleLearnMore}
          />
        ))}
      </div>
      {selectedArticle && (
        <Modal article={selectedArticle} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
