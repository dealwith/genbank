import React from "react";
import { Button } from "react-bootstrap";

export const Header = () => (
  <header className="g-header">
    <nav className="g-nav g-header__nav g-text-invert">
      <div>
        <span className="mr-sm-2">{`hello ${"Hleb"}`}</span>
        <Button>Logout</Button>
      </div>
    </nav>
  </header>
);
