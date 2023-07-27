import React, { useState, useEffect } from "react";
import { getArticles, deleteArticle } from "../services/Api";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then((response) => setArticles(response.data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  const handleDeleteArticle = (id) => {
    deleteArticle(id)
      .then(() => {
        getArticles()
          .then((response) => setArticles(response.data))
          .catch((error) => console.error("Error fetching articles:", error));
      })
      .catch((error) => console.error("Error deleting article:", error));
  };

  return (
    <div>
      <h1>Daftar Artikel</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            {article.title} - {article.content}
            <button onClick={() => handleDeleteArticle(article.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
