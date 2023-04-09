import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./Navigation.scss";
import logo from "../../images/logo72ppi.jpg";

const list = [
  { name: "home", path: "/", exact: true },
  { name: "zdjęcia", path: "/photos" },
  { name: "grafika", path: "/graphics" },
  { name: "kontakt", path: "/contacts" }
];

const Navigation = () => {
  const menu = list.map((item) => (
    <li className="navigation__list-element" key={item.name}>
      <NavLink
        activeclassname="active"
        to={item.path}
        exact={item.exact === "true" ? item.exact : "false"}
      >
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <header className="header">
      <nav className="navigation">
        <Link to="/">
          <img
            className="navigation-logo"
            src={logo}
            alt="logo robione z pasją"
          />
        </Link>
        <ul className="navigation__list">{menu}</ul>
      </nav>
    </header>
  );
};

export default Navigation;
