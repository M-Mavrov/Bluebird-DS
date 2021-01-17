import React, { useState } from "react";
import "./Logout.css";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function Logout() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();
  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/");
      console.log("you have logged out");
    } catch {
      setError("Failed to logout");
      console.log(error);
    }
  }

  return (
    <div>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
