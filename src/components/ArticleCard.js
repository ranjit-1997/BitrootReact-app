import React, { useState } from 'react';
import './ArticleCard.css';

const ArticleCard = ({ article, onLearnMore }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleLearnMore = () => {
    onLearnMore(article);
  };

  return (
    <div
      className={`article-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {article.thumbnail && (
        <img src={article.thumbnail.large} alt={article.title} />
      )}
      <button className="learn-more-button" onClick={handleLearnMore}>Learn More</button>
      <div className="title" onClick={handleLearnMore}>{article.title}</div>
      <div className="content">{article.content}</div>
      <div className="author-info">
        <div className="author">{article.author.name} - {article.author.role}</div>
        <div className="date">{new Date(article.date * 1000).toLocaleDateString()}</div>
      </div>
    </div>
  );
};

export default ArticleCard;
