import Footer from "./Footer";
import Navbar from "./Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFolder, faCircle } from "@fortawesome/free-solid-svg-icons";
const DetailArtikel = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center w-full h-[84.3vh] ">
        <div className="w-3/4 h-1/2 mt-52 bg-white rounded-lg shadow-lg">
          <div className="flex mt-5 ml-5">
            <div className=" flex-col ml-4 mt-5">
              <p className="bg-[#EFEFEF] w-[80px] h-[80px] text-center pt-6 font-semibold text-2xl" id="tanggal">
                09
              </p>
              <p className="bg-[#215385] w-[80px] h-[30px] text-center text-white text-sm pt-1 " id="bulan-tahun">
                April 2022
              </p>
            </div>
            <div className="flex-col ml-4 mt-5">
              <p className="font-semibold text-3xl">Keputusan Gubernur Nomor 300 Tahun 2022</p>

              <div className="flex ">
                <FontAwesomeIcon icon={faUser} className="text-xl mt-3 mr-2 text-[#474747]" />
                <p className="font-semibold text-md mt-2 text-[#474747] ">
                  By <span className="text-[#369FF7] cursor-pointer hover:underline">admin</span>
                </p>
                <FontAwesomeIcon icon={faFolder} className="text-xl mt-3 mr-2 ml-5 text-[#474747]" />
                <p className="font-semibold text-md mt-2 text-[#369FF7] cursor-pointer hover:underline">Kategori</p>
              </div>
            </div>
          </div>

          <div className="w-[97%] ml-9 mt-5 font-inter text-[#474747]">
            <p className="text-lg  ">Penetapan Pemusnahan 41.816 (Empat Puluh Satu Ribu Delapan Ratus Enam Belas) Arsip Pada Badan Pengelolaan Keuangan Daerah Provinsi Daerah Khusus Ibukota Jakarta</p>
            <p className="mt-5 font-semibold text-xl ">Details</p>
            <div className="flex mt-5 font-semibold text-lg ml-5">
              <FontAwesomeIcon icon={faCircle} className="text-[7px] mt-3 mr-1" />
              <p>Tipe : Dokumen</p>
            </div>
            <div className="flex mt-5 font-semibold text-lg ml-5">
              <FontAwesomeIcon icon={faCircle} className="text-[7px] mt-3 mr-1" />
              <p>Format : PDF</p>
            </div>
          </div>
          <button className="ml-14 mt-5 text-[#215385] border-[#C4C4C4] border-2 rounded-3xl p-4 font-semibold hover:underline">Unduh Materi</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailArtikel;
