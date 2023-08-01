import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Kategori from "./components/Kategori.jsx";
import Login from "./components/Login.jsx";
import DetailArtikel from "./components/DetailArtikel";

import "./App.css";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kategori" element={<Kategori />} />
          <Route path="/login" element={<Login />} />
          <Route path="/artikel/:id" element={<DetailArtikel />} />
          {/* <Route exact path="/artikel/:id" component={DetailArtikel} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
