import React from "react";
import { Link } from "react-router-dom";
import "./VirtualAssistant.css";

function VirtualAssistant() {
  return (
    <div className="va-container">
      <p>
        If you don't know what a Virtual Assistant ( VA ) is, you can find out
        on our <Link to="/guide">Guide</Link> page.
      </p>
      <h3>
        To add a virtual assistant, please{" "}
        <Link to="/contact-us">contact us</Link>.
      </h3>
      <h3>No Virtual Assistants added.</h3>
    </div>
  );
}
export default VirtualAssistant;
