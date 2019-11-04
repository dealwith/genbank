import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ user = "" }) => {
  return (
    <header className="g-header">
      <nav className="g-nav g-header__nav g-text-invert">
        <div>
          <span className="mr-sm-2">
            {user ? `Hello ${user.name}` : `Hello guest`}
          </span>
          <Button>
            <Link to="/login" className="g-text-invert">
              {user.name ? "Logout" : "Login"}
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

function mapState(state) {
  const { user } = state.authentication;
  return { user };
}

const connectedHeader = connect(mapState)(Header);
export { connectedHeader as Header };
