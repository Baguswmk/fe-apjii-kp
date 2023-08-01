import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { getArticles } from "../services/Api";
import { Link } from "react-router-dom";

const ListArtikel = () => {
  const [articles, setArticles] = useState([]);

  const getTanggal = (createdAtString) => {
    const createdAtDate = new Date(createdAtString);
    const tanggal = createdAtDate.getDate();
    return tanggal < 10 ? "0" + tanggal : tanggal.toString();
  };

  const getBulanTahun = (createdAtString) => {
    const createdAtDate = new Date(createdAtString);
    const bulan = new Intl.DateTimeFormat("id-ID", { month: "short" }).format(createdAtDate);
    const tahun = createdAtDate.getFullYear();
    return `${bulan} ${tahun}`;
  };

  useEffect(() => {
    getArticles()
      .then((response) => {
        const articlesData = response.data.results;
        setArticles(articlesData);
      })
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  const verticalSprings = useSpring({
    from: { y: -100 },
    to: { y: 0 },
  });

  return (
    <>
      {articles.map((article) => (
        
        <animated.div className="grid grid-cols-2 gap-4 w-full h-screen m-10 md:grid-cols-1" key={article.id} style={{
          ...verticalSprings,
        }}>
          <div className="flex h-[250px] shadow-md rounded-lg overflow-hidden">
            <div className="flex flex-col mt-4 ml-4">
              <p className="bg-[#EFEFEF] w-[80px] h-[80px] text-center pt-6 font-semibold text-2xl" id="tanggal">
                {getTanggal(article.created_at)}
              </p>
              <p className="bg-[#215385] w-[80px] h-[30px] text-center text-white text-sm pt-1 " id="bulan-tahun">
                {getBulanTahun(article.created_at)}
              </p>
            </div>
            <div className="flex flex-col m-3 w-full">
              <p className="font-semibold text-xl underline decoration-solid w-full mb-3 cursor-pointer" id="title">
                {article.judul}
              </p>
              <p className="text-justify" id="desc">
                {article.deskripsi}
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
        </animated.div>
      ))}
    </>
  );
};

export default ListArtikel;
