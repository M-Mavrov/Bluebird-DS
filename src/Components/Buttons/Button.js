import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = [
  "btn--small",
  "btn--medium",
  "btn--large",
  "btn--full",
  "btn--mobile",
];
const COLOR = ["primary", "blue", "red", "green"];

function Button({
  children,
  buttonColor,
  buttonSize,
  buttonStyle,
  type,
  onClick,
}) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonColor = COLOR.includes(buttonColor)
    ? buttonColor
    : "primary";

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
