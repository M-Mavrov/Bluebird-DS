import React, { forwardRef } from "react";
import "./DropDown.css";

const DropDown = forwardRef((props, ref) => {
  function onlyUnique(value, index, self) {
    return self.lastIndexOf(value) === index;
  }

  return (
    <div className="custom-select">
      <label>{props.labelname}</label>
      <select {...props} ref={ref}>
        {props.options.filter(onlyUnique).map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

export default DropDown;
