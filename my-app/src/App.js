import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Footer />
    </Router>
  );
}

export default App;
