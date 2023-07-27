/* eslint-disable jsx-a11y/img-redundant-alt */
import globe from "../img/globe.png";
import apjii from "../img/apjii.png";
import { Link } from "react-router-dom";
import Wave from "./Wave";
import { useSpring, animated } from "@react-spring/web";
import { motion } from "framer-motion";

const Hero = () => {
  const horizontalSprings = useSpring({
    from: { x: -50 },
    to: { x: 50 },
  });

  const verticalSprings = useSpring({
    from: { y: 100 },
    to: { y: 0 },
  });
  return (
    <div className="home relative bg-gradient-to-b mb-44  " style={{ backgroundImage: "linear-gradient(to bottom, #215385, #000000)", height: "calc(100vh - 105px)" }}>
      <motion.div
        className="home-bg absolute right-0 bottom-0 z-0 mr-[51px] max-md:mr-[50px]"
        animate={{ x: 50 }}
        transition={{
          ease: "linear",
          duration: 0.5,
          x: { duration: 0.5 },
        }}
      >
        <img src={globe} alt="image-globe" className="w-[100%] max-h-[60rem]" />
      </motion.div>
      <div className="wave mt-[-280px] absolute right-0 bottom-0 z-0  max-md:hidden w-full">
        <Wave />
      </div>
      <animated.div
        className="home-bg absolute right-0 bottom-0 z-0  max-md:hidden"
        style={{
          ...verticalSprings,
        }}
      >
        <img src={apjii} alt="image-globe" className="w-full max-h-[40rem]" />
      </animated.div>
      <div className="home-content relative z-10 p-5 h-[85%] flex items-center justify-start max-md:p-0  max-md:h-[55%]  ">
        <animated.div
          className="home-title font-bold text-white ml-10 flex-col max-md:ml-0 max-md:max-w-[200px]"
          style={{
            ...horizontalSprings,
          }}
        >
          <p className="font-bold text-5xl mb-2 max-md:text-3xl ">APJII Directory</p>
          <p className="font-normal text-4xl max-md:text-2xl">
            <span className="font-bold">Public</span> File Sharing
          </p>
          <p className="font-normal text-4xl max-md:text-2xl">
            <span className="font-bold">Directory</span> for Your Convinience
          </p>
          <Link to="/login">
            <button className="rounded-full bg-white text-[#215385] w-40 h-10 mt-5">LOGIN</button>
          </Link>
        </animated.div>
      </div>
    </div>
  );
};

export default Hero;
