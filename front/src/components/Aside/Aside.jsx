import React from "react";
import { Link } from "react-router-dom";

export const Aside = () => (
  <aside className="g-aside">
    <div className="g-aside__header">
      <h1 className="g-text-logo">Logo</h1>
    </div>
    <div className="g-aside__main">
      <nav className="g-nav g-nav-admin">
        <ul className="g-text-invert">
          <li>
            <Link to="/users">users</Link>
          </li>
          <li>
            <Link to="/">main</Link>
          </li>
          <li>
            <Link to="/add-species">add species</Link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
);
