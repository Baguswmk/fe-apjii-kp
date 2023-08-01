import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import logoPutih from "../img/logo-putih.png";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 1020 ? false : isOpen);
    };

    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const verticalSprings = useSpring({
    from: { y: -50 },
    to: { y: 10 },
  });

  return (
    <>
      <div className=" bg-gray-100 dark-mode:bg-gray-900 z-[99999]">
        <animated.div className={`w-full text-white bg-[#215385] dark-mode:text-gray-200 dark-mode:bg-white ${isFixed ? "fixed top-0 left-0" : ""} ${isFixed ? "bg-white" : ""}`}>
          <div className="flex flex-col px-4 mx-auto lg:items-center lg:justify-between lg:flex-row lg:px-8">
            <animated.div
              className="flex flex-row items-center justify-between p-4"
              style={{
                ...verticalSprings,
              }}
            >
              <Link to="/" className={`text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline  `}>
                <img src={isFixed ? logo : logoPutih} alt="Logo-APJII" className="h-20  max-md:w-40 max-md:h-20" />
              </Link>
              <button className={`rounded-lg lg:hidden focus:outline-none focus:shadow-outline ${isFixed ? "text-[#215385]" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                  {isOpen ? (
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  ) : (
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                  )}
                </svg>
              </button>
            </animated.div>
            <animated.nav
              className={`flex-col flex-grow lg:flex ${isOpen ? "flex" : "hidden"} ${isOpen ? "absolute" : "unset"} ${isOpen ? "z-[100]" : "z-0"}  ${isOpen ? "mt-[100px]" : "mt-0"} ${isOpen ? "w-full" : ""} ${
                isFixed ? "text-[#215385]" : ""
              }   ${isFixed ? "ml-[-16px] bg-white" : "ml-[-16px] bg-[#215385] "} font-inter pb-4 lg:pb-0 lg:justify-end lg:flex-row`}
              style={{
                ...verticalSprings,
              }}
            >
              <Link
                to="/"
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg uppercase dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 lg:ml-4  hover:underline hover:transition hover:ease-in-out hover:delay-80  focus:underline"
              >
                <p className={`mt-2  ${isFixed ? "w-[80%] ml-5" : "w-[80%] ml-5"} `}>Beranda</p>
              </Link>
              <Link
                to="/Kategori"
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg uppercase dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 lg:ml-4  hover:underline focus:underline"
              >
                <p className={`mt-2 mr-5 ${isFixed ? "w-[80%] ml-5 " : "w-[80%] ml-5"}`}>Kategori 1</p>
              </Link>
              <Link
                to="/Kategori"
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg uppercase dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 lg:mt-0 lg:ml-4  hover:underline focus:underline"
              >
                <p className={`mt-2 w-full mr-5 ${isFixed ? "w-[80%] ml-5" : "w-[80%] ml-5"}`}>Kategori X</p>
              </Link>
              <div
                className={`nav-sosmed menu-horizontal px-5 mr-3 lg:flex lg:justify-center`}
                style={{
                  marginTop: isOpen ? "15px" : "",
                  marginLeft: isOpen ? "auto" : "",
                  marginRight: isOpen ? "auto" : "",
                }}
              >
                <Link
                  to="https://facebook.com"
                  className={` ${
                    isFixed ? "text-black" : "text-white"
                  }  mx-1 border-solid border-2 border-[#215385] shadow-custom rounded p-2 h-10 hover:bg-white hover:text-[#215385] hover:drop-shadow-[0_4px_4px_rgba(0,0,0,1)] hover:transition hover:ease-in-out hover:delay-80`}
                >
                  <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
                </Link>
                <Link
                  to="https://youtube.com"
                  className={`${isFixed ? "text-black" : "text-white"} ${
                    isFixed ? "hover:text-white" : ""
                  } mx-1 border-solid border-2 border-[#215385] shadow-custom rounded p-2 h-10 hover:bg-red-600 hover:border-red-600 hover:transition hover:ease-in-out hover:delay-80 hover:drop-shadow-[0_4px_4px_rgba(0,0,0,1)]`}
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </Link>
                <Link
                  to="https://instagram.com"
                  className={`${isFixed ? "text-black" : "text-white"}  ${
                    isFixed ? "hover:text-white" : ""
                  } mx-1 border-solid border-2 border-[#215385] shadow-custom rounded p-2 h-10 hover:bg-violet-600 hover:border-violet-600 hover:transition hover:ease-in-out hover:delay-80 hover:drop-shadow-[0_4px_4px_rgba(0,0,0,1)]`}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link
                  to="https://linkedin.com"
                  className={`${isFixed ? "text-black" : "text-white"} ${
                    isFixed ? "hover:text-white" : ""
                  }  mx-1 border-solid border-2 border-[#215385] shadow-custom rounded p-2 h-10 hover:bg-[#215385] hover:border-[#215385] hover:transition hover:ease-in-out hover:delay-80 hover:drop-shadow-[0_4px_4px_rgba(0,0,0,1)]`}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </div>
            </animated.nav>
          </div>
        </animated.div>
      </div>
    </>
  );
};

export default Navbar;
