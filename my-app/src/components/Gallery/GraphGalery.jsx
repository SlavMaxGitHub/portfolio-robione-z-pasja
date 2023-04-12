import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";

import "./Gallery.scss";
import chess from "../../images/GraphGalleryImages/chess.jpg";
import fish from "../../images/GraphGalleryImages/fish.jpg";
import fotograf from "../../images/GraphGalleryImages/fotograf.jpg";
import kurczak from "../../images/GraphGalleryImages/kurczak.jpg";
import moon from "../../images/GraphGalleryImages/moon.jpg";
import myszkaMinnie from "../../images/GraphGalleryImages/myszkaMinnie.jpg";
import piorko from "../../images/GraphGalleryImages/piorko.jpg";
import rak from "../../images/GraphGalleryImages/rak.jpg";

const GraphGallery = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section className="galleryWrapper">
      <Carousel
        variant="dark"
        className="gallery__carousel"
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item className="gallery__carousel-item">
          <img
            className="d-block w-100 img-fluid gallery__carousel-item-image"
            src={chess}
            alt="figura szachowa wpadająca do wody"
          />
        </Carousel.Item>

        <Carousel.Item className="gallery__carousel-item">
          <img
            className="d-block w-100 img-fluid gallery__carousel-item-image"
            src={fish}
            alt="dwie ryby zamknięte w żarówce z wodą"
          />
        </Carousel.Item>

        <Carousel.Item className="gallery__carousel-item">
          <img
            className="d-block w-100 img-fluid gallery__carousel-item-image"
            src={fotograf}
            alt="fotograf robiący zdjecie"
          />
        </Carousel.Item>

        <Carousel.Item className="gallery__carousel-item">
          <img
            className="d-block w-100 img-fluid gallery__carousel-item-image"
            src={kurczak}
            alt="kurczak ubrany w strój zawodnika taekwondoo"
          />
        </Carousel.Item>

        <Carousel.Item className="gallery__carousel-item">
          <img
            className="d-block w-100 img-fluid gallery__carousel-item-image"
            src={moon}
            alt="księżyć zakryty gałeziami drzew"
          />
        </Carousel.Item>

        <Carousel.Item className="gallery__carousel-item">
          <img
            className="d-block w-100 img-fluid gallery__carousel-item-image"
            src={myszkaMinnie}
            alt="grafika przedstawiająca myszkę Minnie"
          />
        </Carousel.Item>

        <Carousel.Item className="gallery__carousel-item">
          <img
            className="d-block w-100 img-fluid gallery__carousel-item-image"
            src={piorko}
            alt="kolorowe piórko"
          />
        </Carousel.Item>

        <Carousel.Item className="gallery__carousel-item">
          <img
            className="d-block w-100 img-fluid gallery__carousel-item-image"
            src={rak}
            alt="grafika przedstawiająca znak zodiaku- rak"
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default GraphGallery;
