import Footer from "./Footer";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import { getArticlesbyId } from "../services/Api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFolder, faCircle } from "@fortawesome/free-solid-svg-icons";
import {  useParams } from "react-router-dom";
const DetailArtikel = () => {
  const [article, setArticle] = useState(null);

  const getTanggal = (createdAtString) => {
    const createdAtDate = new Date(createdAtString);
    return createdAtDate.getDate();
  };

  const getBulanTahun = (createdAtString) => {
    const createdAtDate = new Date(createdAtString);
    const bulan = new Intl.DateTimeFormat("en-US", { month: "long" }).format(createdAtDate);
    const tahun = createdAtDate.getFullYear();
    return `${bulan} ${tahun}`;
  };

  const { id } = useParams();
  useEffect(() => {
    getArticlesbyId(id)
      .then((response) => {
        const articlesData = response.data;
        setArticle(articlesData);
      })
      .catch((error) => console.error("Error fetching articles:", error));
  }, [id]);
  if (!article) {
    // Render loading state while waiting for the article to be fetched
    return (
      <div className="flex justify-center items-center w-full h-full">
      <div aria-label="Loading..." role="status"  className="flex w-full h-full align-center item-center ">
          <svg class="h-6 w-6 animate-spin" viewBox="3 3 18 18"><path class="fill-gray-800" d="M16.9497 7.05015c-2.7336-2.73367-7.16578-2.73367-9.89945.0-.39052.39052-1.02369.39052-1.41421.0-.39053-.39053-.39053-1.02369.0-1.41422 3.51472-3.51472 9.21316-3.51472 12.72796.0C18.7545 6.02646 18.7545 6.65962 18.364 7.05015c-.390599999999999.39052-1.0237.39052-1.4143.0z"></path>
          </svg>
        </div>
        </div>
    );
  }
  return (
    <>
      <Navbar />
      <div className="flex justify-center w-full h-[84.3vh] xl:h-[73.3vh] ">
        <div className="w-3/4 h-1/2 mt-52 bg-white rounded-lg shadow-lg xl:mt-3 xl:h-[400px]">
          <div className="flex mt-5 ml-5">
            <div className=" flex-col ml-4 mt-5">
              <p className="bg-[#EFEFEF] w-[80px] h-[80px] text-center pt-6 font-semibold text-2xl xl:w-[60px] xl:h-[60px] " id="tanggal">
              {getTanggal(article.created_at)}
              </p>
              <p className="bg-[#215385] w-[80px] h-[30px] text-center text-white text-sm pt-1 xl:w-[60px] xl:h-[60px] " id="bulan-tahun">
              {getBulanTahun(article.created_at)}
              </p>
            </div>
            <div className="flex-col ml-4 mt-5">
              <p className="font-semibold text-3xl xl:text-xl">{article.judul}</p>

              <div className="flex ">
                <FontAwesomeIcon icon={faUser} className="text-xl mt-3 mr-2 text-[#474747]" />
                <p className="font-semibold text-md mt-2 text-[#474747] ">
                  By <span className="text-[#369FF7] cursor-pointer hover:underline">{article.kategori.id}</span>
                </p>
                <FontAwesomeIcon icon={faFolder} className="text-xl mt-3 mr-2 ml-5 text-[#474747]" />
                <p className="font-semibold text-md mt-2 text-[#369FF7] cursor-pointer hover:underline">{article.kategori.nama}</p>
              </div>
            </div>
          </div>

          <div className="w-[97%] ml-9 mt-5 font-inter text-[#474747]">
            <p className="text-lg  ">{article.deskripsi}</p>
            <p className="mt-5 font-semibold text-xl ">Details</p>
            <div className="flex mt-5 font-semibold text-lg ml-5">
              <FontAwesomeIcon icon={faCircle} className="text-[7px] mt-3 mr-1" />
              <p>Tipe : {article.tipe}</p>
            </div>
            <div className="flex mt-5 font-semibold text-lg ml-5">
              <FontAwesomeIcon icon={faCircle} className="text-[7px] mt-3 mr-1" />
              <p>Format : {article.format}</p>
            </div>
          </div>
          <div      className="ml-14 w-[15%] text-center mt-5 text-[#215385] border-[#C4C4C4] border-2 rounded-3xl p-4 font-semibold hover:underline">
          <a
            href={article.file}
            target="_blank" // Membuka tautan unduhan dalam tab atau jendela baru
            rel="noopener noreferrer" // Rekomendasi keamanan untuk membuka tautan eksternal dalam tab baru
       
          >
            Unduh Materi
          </a>
          </div>
      
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailArtikel;
