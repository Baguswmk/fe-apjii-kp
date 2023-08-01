import React, { useState, useEffect } from "react";
import { getCategories, deleteCategory } from "../services/Api";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleDeleteCategory = (id) => {
    deleteCategory(id)
      .then(() => {
        getCategories()
          .then((response) => setCategories(response.data))
          .catch((error) => console.error("Error fetching categories:", error));
      })
      .catch((error) => console.error("Error deleting category:", error));
  };

  return (
    <div>
      <h1>Daftar Kategori</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name}
            <button onClick={() => handleDeleteCategory(category.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
