import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

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
        <ul className="navigation__list">{menu}</ul>
      </nav>
    </header>
  );
};

export default Navigation;
