import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import React, { useState, useEffect } from "react";
import { getArticles } from "../services/Api";
// import { getArticles, deleteArticle } from "../services/Api";
import { Link } from "react-router-dom";

const ListArtikel = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then((response) => setArticles(response.data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  // const handleDeleteArticle = (id) => {
  //   deleteArticle(id)
  //     .then(() => {
  //       getArticles()
  //         .then((response) => setArticles(response.data))
  //         .catch((error) => console.error("Error fetching articles:", error));
  //     })
  //     .catch((error) => console.error("Error deleting article:", error));
  // };
  return (
    <div class="grid grid-cols-2 gap-4 w-full h-screen m-16 md:grid-cols-1">
      {articles.map((article) => (
        <div class="flex h-[250px] shadow-md rounded-lg overflow-hidden" key={article.id}>
          <div className="flex flex-col mt-4 ml-4">
            <p className="bg-[#EFEFEF] w-[80px] h-[80px] text-center pt-6 font-semibold text-2xl" id="tanggal">
              09
            </p>
            <p className="bg-[#215385] w-[80px] h-[30px] text-center text-white text-sm pt-1 " id="bulan-tahun">
              April 2022
            </p>
          </div>
          <div class="flex flex-col m-3 w-full">
            <p className="font-semibold text-xl underline decoration-solid w-full mb-3 cursor-pointer" id="title">
              {article.judul}Keputusan Gubernur Nomor 300 Tahun 2022
            </p>
            <p className="text-justify" id="desc">
              {article.Deskripsi}Penetapan Pemusnahan 41.816 (Empat Puluh Satu Ribu Delapan Ratus Enam Belas) Arsip Pada Badan Pengelolaan Keuangan Daeraha Provinsi Daerah Khusus Ibukota Jakarta
            </p>
            <div className="p-3 border-solid border rounded border-[#C4C4C4] w-[30%] mt-3 cursor-pointer">
              <button className="text-left text-[#236EB4] ">
                <Link to={`/artikel/${article.id}`}>
                  Selengkapnya <FontAwesomeIcon icon={faChevronRight} />
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListArtikel;
