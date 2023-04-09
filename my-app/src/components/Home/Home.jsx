import React from "react";

import { Link } from "react-router-dom";

import "./Home.scss";
import logo from "../../images/logo.png";

let textAbout =
  "Cześć, jestem Gosia! Ukończyłam roczny kurs na kierunku Grafika Komputerowa w TEB Edukacja uzyskując ocenę bardzo dobry. Posiadam certyfikaty ze znajomści praktycznej programów Adobe Photoshop, Adobe InDesign oraz Adobe Ilustrator. Moją pasją jest fotografia. Najbardziej lubię robić zdjęcia portretowe oraz fotografie makro.";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="home home__about">
        <img
          src={logo}
          alt="logo aparatu fotograficznego z motylem"
          className="home__about-img"
        />
        <p className="home__about-text">{textAbout}</p>
      </div>
      <div className="home home__photo">
        <Link className="home--link" to="/photos">
          zdjęcia
        </Link>
      </div>
      <div className="home home__graph">
        <Link className="home--link" to="/graphics">
          grafika{" "}
        </Link>
      </div>
    </div>
  );
};

export default Home;
