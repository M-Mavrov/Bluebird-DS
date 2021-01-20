import React from "react";
import "./Navbar.css";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Logout from "../Logout/Logout";

function Navbar() {
  const [click, setClick] = useState(false);
  const { currentUser } = useAuth();

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Bluebird DS
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <p>X</p> : <p>||||</p>}
        </div>
        <ul
          className={click ? "nav-menu active" : "nav-menu"}
          onClick={() => setClick(false)}
        >
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          {currentUser && (
            <li className="nav-item">
              <Link to="add-product" className="nav-links">
                Add Product
              </Link>
            </li>
          )}
          {currentUser && (
            <li className="nav-item">
              <Link to="orders" className="nav-links">
                Orders
              </Link>
            </li>
          )}
          <li className="nav-item">
            <Link to="guide" className="nav-links">
              Guide
            </Link>
          </li>
          {!currentUser && (
            <li className="nav-item">
              <Link to="plans" className="nav-links">
                Plans
              </Link>
            </li>
          )}
          <li className="nav-item">
            <Link to="contact-us" className="nav-links">
              Contact us
            </Link>
          </li>
          <li>
            {currentUser ? (
              <Logout />
            ) : (
              <Link to="sign-in" className="nav-links sign-in-link">
                Sign in
              </Link>
            )}
          </li>
          <li className="nav-btn">
            {currentUser ? (
              <Link to="/account" className="btn-link">
                <Button
                  buttonStyle="btn--outline"
                  buttonSize="btn--medium"
                  buttonColor="green"
                >
                  Account
                </Button>
              </Link>
            ) : (
              <Link to="/get-started" className="btn-link">
                <Button
                  buttonStyle="btn--outline"
                  buttonSize="btn--medium"
                  buttonColor="green"
                >
                  Get started
                </Button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
