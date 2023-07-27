import Carousel from "./Carousel";
import ListMateri from "./ListMateri";

const Kategori = () => {
  const texts = ["First Slide", "Second Slide"];
  const desc = ["Total Materi di-Upload", "Materi di-Unduh"];
  return (
    <div>
      <div className="bg-[#215385] w-full h-52 flex">
        <div className="flex-col w-1/2 mt-5 text-white font-semibold ">
          <p className="ml-12 mb-3 text-4xl">APJII Public File Sharing</p>
          <p className="ml-12 text-lg font-normal w-3/4">
            Merupakan fasilitas dari APJII kepada para Anggota APJII maupun masyarakat umum untuk mengunduh file-file / materi seputar regulasi, peraturan, serta pelayanan APJII yang dapat digunakan untuk kepentingan umum.
          </p>
        </div>
        <div className="w-1/2 mt-10 text-white ">
          <p className="text-center text-xl">Data terkini</p>
          <div className="flex justify-center items-center text-black">
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
