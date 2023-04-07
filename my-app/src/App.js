import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import FrontSite from "./components/FrontSite/FrontSite";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <header className="header">
        <Navigation />
      </header>
      <FrontSite />
      <Gallery />
      <Footer />
    </Router>
  );
}

export default App;
