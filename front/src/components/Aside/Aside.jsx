import React from "react";

export const Aside = () => (
  <aside className="g-aside">
    <div className="g-aside__header">
      <h1 className="g-text-logo">Logo</h1>
    </div>
    <div className="g-aside__main">
      <nav className="g-nav g-nav-admin">
        <ul className="g-text-invert">
          <li>
            <a href="#">main</a>
          </li>
          <li>
            <a href="#">add table</a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
);
