import React, { forwardRef } from "react";
import "./ImageEditor.css";

const SidebarItem = forwardRef((props, ref) => {
  return (
    <button
      onClick={props.handleClick}
      className={`sidebar-item ${props.active ? "active" : ""}`}
      ref={ref}
    >
      {props.name}
    </button>
  );
});

export default SidebarItem;
