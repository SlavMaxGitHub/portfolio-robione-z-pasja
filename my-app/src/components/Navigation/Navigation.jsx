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
  const handleHideMobileMenu = () => {
    const navigation = document.querySelector(".navigation");
    navigation.classList.remove("navDown");
  };
  const menu = list.map((item) => (
    <li
      onClick={handleHideMobileMenu}
      className="navigation__list-element"
      key={item.name}
    >
      <NavLink
        activeclassname="active"
        to={item.path}
        exact={item.exact === "true" ? item.exact : "false"}
      >
        {item.name}
      </NavLink>
    </li>
  ));

  const handleShowMobileMenu = () => {
    const navigation = document.querySelector(".navigation");
    navigation.classList.toggle("navDown");
  };

  return (
    <header className="header">
      <nav className="navigation">
        <Link to="/">
          <img
            onClick={handleHideMobileMenu}
            className="navigation-logo"
            src={logo}
            alt="logo robione z pasją"
          />
        </Link>
        <ul className="navigation__list">{menu}</ul>
        <i
          onClick={handleShowMobileMenu}
          className="fa-solid fa-bars burger"
        ></i>
      </nav>
    </header>
  );
};

export default Navigation;
