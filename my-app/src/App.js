import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Page from "./components/Pages/Page";
import Footer from "./components/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <Router>
      <Navigation />
      <main className="page">
        <Page />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
