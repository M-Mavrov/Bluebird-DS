import React, { useRef, useState } from "react";
import Button from "../Buttons/Button";
import "./UserSettings.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

function UserSettings() {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { currentUser, updatePassword } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    setError("");
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match!");
    }
    const promises = [];

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }
    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      });
  }
  return (
    <div className="user-settings">
      {error && <p className="error">{error}</p>}
      <label>Email Address</label>
      <h3>{currentUser.email}</h3>
      <form onSubmit={handleSubmit}>
        <label>Update Password</label>
        <input ref={passwordRef} name="password" type="password" />
        <label>Confirm Updated Password</label>
        <input
          ref={confirmPasswordRef}
          name="confirm password"
          type="password"
        />

        <div className="links-container">
          <Link to="/">Cancel</Link>
          <Button buttonSize="btn--large" buttonColor="green" type="submit">
            UPDATE PROFILE
          </Button>
        </div>
      </form>
    </div>
  );
}
export default UserSettings;
