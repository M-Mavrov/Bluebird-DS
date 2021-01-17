import React from "react";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer-container">
      <Button
        onClick={scrollToTop}
        buttonSize="btn--full"
        buttonStyle="btn--outline"
      >
        BACK TO TOP
      </Button>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/get-started">How it works</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Helpful links</h2>
            <Link to="/">Guides</Link>
            <Link to="/">Courses</Link>
            <Link to="/">Sitemap</Link>
            <Link to="/">Blog</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
          </div>
        </div>
      </div>
      <div className="footer-website-wrap">
        <div className="website-logo">
          <p>LOGO</p>
        </div>

        <Link className="website-links" to="/conditions-of-Use">
          Conditions of Use
        </Link>
        <Link className="website-links" to="/privacy-Notice">
          Privacy Notice
        </Link>
        <Link className="website-links" to="/interest-Based-ads">
          Interest-Based Ads
        </Link>

        <small className="website-rights">
          © 2020, OurSite.com, Inc. or its affiliates
        </small>
      </div>
    </div>
  );
}

export default Footer;
