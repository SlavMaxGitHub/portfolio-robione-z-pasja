import React from "react";
import { Link } from "react-router-dom";

import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <section className="error">
      <h2 className="error-title">błąd 404 - strona nie została odnaleziona</h2>
      <Link to="/" className="error-link">
        <p>Wróć do strony głównej</p>
      </Link>
    </section>
  );
};

export default ErrorPage;
