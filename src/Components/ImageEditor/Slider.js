import React, { useEffect, useRef } from "react";
import "./ImageEditor.css";

function Slider(props) {
  const ref = useRef();
  useEffect(() => {
    if (ref.current.value !== undefined) {
      ref.current.value = props.max / 2;
    }
  }, [props.max]);
  return (
    <div className="slider-container">
      <input
        ref={ref}
        type="range"
        min={props.min}
        max={props.max}
        className="slider"
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Slider;
