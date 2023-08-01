import Carousel from "./Carousel";
import ListMateri from "./ListArtikel";

const Kategori = () => {
  const texts = ["004", "002"];
  const desc = ["Total Materi di-Upload", "Materi di-Unduh"];
  return (
    <div>
      <div className="bg-[#215385] w-full h-52 flex max-md:grid max-md:grid-cols-1 max-md:h-[550px]">
        <div className="flex-col w-1/2 mt-10 text-white font-semibold max-md:w-full">
          <p className="ml-12 mb-3 text-4xl max-md:text-3xl max-md:w-3/4 max-md:my-auto ">APJII Public File Sharing</p>
          <p className="ml-12 text-lg font-normal w-3/4 max-md:text-base max-md:text-justify ">
            Merupakan fasilitas dari APJII kepada para Anggota APJII maupun masyarakat umum untuk mengunduh file-file / materi seputar regulasi, peraturan, serta pelayanan APJII yang dapat digunakan untuk kepentingan umum.
          </p>
        </div>
        <div className="w-1/2 mt-10 text-white max-md:text-center max-md:w-full ">
          <p className="text-center text-xl">Data terkini</p>
          <div className="flex justify-center items-center text-black ">
            <Carousel texts={texts} desc={desc} />
          </div>
        </div>
      </div>

      <div className=" w-full h-full mt-10">
        <h1 className="text-center text-black text-4xl">
          Materi <span className="font-semibold">Terbaru</span>
        </h1>
        <div className="flex justify-center items-center mt-10">
          <ListMateri />
        </div>
      </div>
    </div>
  );
};

export default Kategori;
