import React from "react";

import "./Home.scss";
let textAbout =
  "Cześć, jestem Gosia! Ukończyłam roczny kurs na kierunku Grafika Komputerowa w TEB Edukacja uzyskując ocenę bardzo dobry. Posiadam certyfikaty ze znajomści praktycznej programów Adobe Photoshop, Adobe InDesign oraz Adobe Ilustrator. Moją pasją jest fotografia. Najbardziej lubię robić zdjęcia portretowe oraz fotografie makro.";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="home home__about">
        <img
          src="../../../public/assets/images/logo.png"
          alt="logo aparatu fotograficznego z motylem"
          className="home__about-img"
        />
        <p className="home__about-text">{textAbout}</p>
      </div>
      <div className="home home__photo"></div>
      <div className="home home__graph"></div>
    </div>
  );
};

export default Home;
