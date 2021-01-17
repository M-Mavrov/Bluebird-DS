import React, { useState } from "react";
import "./App.css";
import { auth } from "./Firebase";
import AuthApp from "./AuthApp";
import UnauthApp from "./UnauthApp";

function App() {
  const [user, setUser] = useState();
  auth.onAuthStateChanged(function (user) {
    if (user) {
      setUser(user.email);
    } else {
      setUser("");
    }
  });

  return user ? <AuthApp /> : <UnauthApp />;
}

export default App;
