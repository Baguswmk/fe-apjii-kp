import axios from "axios";
import Config from "./Config";
// Ganti dengan URL API sesuai kebutuhan

const api = axios.create({
  baseURL: Config.BASE_URL,
});

export const getCategories = () => api.get("/kategori");
export const addCategory = (category) => api.post("/kategori/create", category);
export const updateCategory = (id, category) => api.put(`/kategori/edelkategori/${id}`, category);
export const deleteCategory = (id) => api.delete(`/kategori/edelkategori/${id}`);

export const getArticles = () => api.get("/artikel");
export const addArticle = (article) => api.post("/artikel/create", article);
export const updateArticle = (id, article) => api.put(`/artikel/edelartikel/${id}`, article);
export const deleteArticle = (id) => api.delete(`/artikel/edelartikel/${id}`);
