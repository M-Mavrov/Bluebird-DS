import React, { useRef, useState } from "react";
import Button from "../Buttons/Button";
import "./SignInForm.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

function SignInForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signin } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    try {
      setError("");
      signin(emailRef.current.value, passwordRef.current.value);

      history.push("/");
    } catch {
      setError("Failed to sign in");
    }
  }

  return (
    <div>
      <form className="sign-in" onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        {error && <p className="error">{error}</p>}
        <label>Email</label>
        <input ref={emailRef} name="email" placeholder="Email" />
        <label>Password</label>
        <input ref={passwordRef} name="password" type="password" />

        <div className="button-css">
          <Button buttonSize="btn--large" buttonColor="green" type="submit">
            SIGN IN
          </Button>
        </div>
        <div className="link-container">
          <Link to="/forgotten-password">Forgotten password?</Link>
          <p>
            New user? <Link to="/get-started">Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
