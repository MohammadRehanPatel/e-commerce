import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";

const MainCarouselItem = ({ image }) => (
  <img
    role="presentation"
    className="cursor-pointer -z-10"
    // onClick={() => nav}
    src={image}
    alt=""
  />
);

const MainCarousel = () => {
  const items = mainCarouselData.map(({ image }) => (
    <MainCarouselItem image={image} />
  ));

  return (
    <div className="-z-10">
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1500}
        infinite
      />
    </div>
  );
};

export default MainCarousel;
