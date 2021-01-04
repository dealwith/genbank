import React from "react";
import { Link } from "react-router-dom";
import { Image } from "../Image";

import logo from "../../public/images/NAS-logo.jpg";

export const Aside = () => (
  <aside className="g-aside">
    <div className="g-aside__header pt-3">
      <div className="g-aside__header-logo">
        <Image
          src={logo}
          alt="logo"
          fluid="true"
          size={{ width: 200 }}
          className="g-aside__header-logo-img"
        />
      </div>
    </div>
    <div className="g-aside__main">
      <nav className="g-nav g-nav-admin">
        <ul className="g-text-invert">
          <li>
            <Link to="/users">Пользователи</Link>
          </li>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/add-species">Добавить вид</Link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
);
