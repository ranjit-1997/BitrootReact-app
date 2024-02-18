import React from "react";
import "./Modal.css"; 

const Modal = ({ article, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="close-icon" onClick={onClose}>x</div>
        <img src={article.thumbnail.large} alt={article.title} />
        <div className="modal-header">
          <h2>{article.title}</h2>
        </div>
        <div className="modal-body">
          <div className="content">{article.content}</div>
          <div className="author-info">
            <div className="author">
              <img src={article.author.avatar} alt={article.author.name} className="author-avatar" />
              {article.author.name} - {article.author.role}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
