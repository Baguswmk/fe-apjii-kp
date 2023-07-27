import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
const SlickCarousel = ({ texts, desc }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  const combinedData = texts.map((text, index) => ({ text, desc: desc[index] }));
  return (
    <div className="w-1/2 text-xl text-center mt-8 text-white">
      <Slider {...settings}>
        {combinedData.map((item, index) => (
          <div key={index}>
            <h1>{item.text}</h1>
            <p>{item.desc}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CustomPrevArrow = (props) => {
  return (
    <div className="custom-arrow prev-arrow" onClick={props.onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};

const CustomNextArrow = (props) => {
  return (
    <div className="custom-arrow next-arrow" onClick={props.onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

export default SlickCarousel;
