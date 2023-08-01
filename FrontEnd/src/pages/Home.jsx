import Hero from "../components/Hero";
import Kategori from "../components/Kategori";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Navbar />
      <Hero />
      <Kategori />
      <Footer />
    </div>
  );
};

export default Home;
