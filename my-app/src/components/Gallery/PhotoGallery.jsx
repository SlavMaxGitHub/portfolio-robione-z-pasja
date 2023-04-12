import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";

import "./Gallery.scss";
import blacksmith from "../../images/PhotoGalleryImages/blacksmith.jpg";
import blueflower from "../../images/PhotoGalleryImages/blueflower.jpg";
import fly from "../../images/PhotoGalleryImages/fly.jpg";
import frog from "../../images/PhotoGalleryImages/frog.jpg";
import girl from "../../images/PhotoGalleryImages/girl.jpg";
import redflower from "../../images/PhotoGalleryImages/redflower.jpg";

const PhotoGallery = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="galleryWrapper">
      <Carousel
        className="gallery__carousel"
        activeIndex={index}
        onSelect={handleSelect}
        variant="dark"
      >
        <Carousel.Item className="gallery__carousel-item">
          <img
            className="d-block w-100 img-fluid gallery__carousel-item-image"
            src={blacksmith}
            alt="rozprysk iskier podczas kucia żelaza "
          />
        </Carousel.Item>

        <Carousel.Item className="gallery__carousel-item">
          <img
            className="d-block w-100 img-fluid gallery__carousel-item-image"
            src={blueflower}
            alt="zdjęcie niebieskiego kwiatu"
          />
        </Carousel.Item>

        <Carousel.Item className="gallery__carousel-item">
          <img
            className="d-block w-100 img-fluid gallery__carousel-item-image"
            src={fly}
            alt="zdjęcie owada siedzącego na kwiecie"
          />
        </Carousel.Item>

        <Carousel.Item className="gallery__carousel-item">
          <img
            className="d-block w-100 img-fluid gallery__carousel-item-image"
            src={frog}
            alt="zdjęcie żaby siedzącej na jesiennych liściach"
          />
        </Carousel.Item>

        <Carousel.Item className="gallery__carousel-item">
          <img
            className="d-block w-100 img-fluid gallery__carousel-item-image"
            src={girl}
            alt="portretowe zdjęcie małej dziewczynki na tle drzew"
          />
        </Carousel.Item>

        <Carousel.Item className="gallery__carousel-item">
          <img
            className="d-block w-100 img-fluid gallery__carousel-item-image"
            src={redflower}
            alt="zdjęcie czerwonego kwiatu"
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default PhotoGallery;
