import React, { useState } from "react";
import Button from "../../Components/Buttons/Button";
import { firestore } from "../../Firebase";
import "./ContactUs.css";
function ContactUs() {
  const [state, setState] = useState(null);

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }
  const handleSendMessage = () => {
    firestore.collection("messages").doc(state.email).set(state);
  };
  return (
    <div className="contact-us-container">
      <div className="contact-us">
        <h1>DROP US A LINE</h1>
        <h2>
          Write us whatever you think you're not clear with, we'll write back to
          you in a real short time
        </h2>
        <input placeholder="Name" name="name" onChange={handleChange} />
        <input
          placeholder="Email address"
          name="email"
          onChange={handleChange}
        />
        <input placeholder="Subject" name="subject" onChange={handleChange} />
        <textarea name="message" onChange={handleChange} />
        <Button
          buttonColor="green"
          buttonSize="btn--full"
          onClick={handleSendMessage}
        >
          Send message
        </Button>
      </div>
    </div>
  );
}

export default ContactUs;
