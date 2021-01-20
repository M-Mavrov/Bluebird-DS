import React from "react";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import "./HeroSection.css";

const COLOR = ["lightBg", "darkBg", "blueBg", "greenBg"];

function HeroSection({
  topLine,
  heroColor,
  headline,
  descHeading1,
  descHeading2,
  description1,
  description2,
  buttonLabel,
  img,
  alt,
  buttonSize,
  linkTo,
  buttonColor,
  buttonClick,
  id,
}) {
  const checkColor = COLOR.includes(heroColor) ? heroColor : "lightBg";
  return (
    <div id={id} className={`hero-section ${checkColor}`}>
      <div className="container">
        <div className="row hero-row">
          <div className="col">
            <div className="hero-text-wrapper">
              <div className="top-line">{topLine}</div>
              <h1 className="headline">{headline}</h1>
              <h3>{descHeading1}</h3>
              <p className="description">{description1}</p>
              <h3>{descHeading2}</h3>
              <p className="description">{description2}</p>
              {linkTo !== undefined ? (
                <Link to={linkTo}>
                  <Button
                    buttonSize={buttonSize}
                    buttonColor={buttonColor}
                    onClick={buttonClick}
                  >
                    {buttonLabel}
                  </Button>
                </Link>
              ) : (
                <Button
                  buttonSize={buttonSize}
                  buttonColor={buttonColor}
                  onClick={buttonClick}
                >
                  {buttonLabel}
                </Button>
              )}
            </div>
          </div>

          <div className="hero-img-wrapper">
            <img src={img} alt={alt} className="hero-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
