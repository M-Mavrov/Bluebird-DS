import React, { useRef, useState } from "react";
import Button from "../Buttons/Button";
import "./ForgotPass.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

function ForgotPass() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setMessage("");
      setError("");
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for instuctions");
    } catch {
      setError("Please fill in the correct email !");
    }
  }
  return (
    <div>
      <p className="members-logo">LOGO</p>
      <form className="forgotpass-container" onSubmit={handleSubmit}>
        <h1>Reset password</h1>
        {error && <p className="error">{error}</p>}
        <p>{message}</p>
        <label>Email</label>
        <input ref={emailRef} name="email" placeholder="Email" />

        <Button buttonSize="btn--large" buttonColor="green" type="submit">
          RESET PASSWORD
        </Button>

        <div className="link-container">
          <Link to="/forgotten-password">Forgotten password?</Link>
          <p>
            New user? <Link to="/sign-up">Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
export default ForgotPass;
