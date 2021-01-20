import React from "react";
import SignInForm from "../../Components/SingInForm/SignInForm";
import "./SignIn.css";

function signIn() {
  return (
    <div>
      <p className="members-logo">Bluebird DS</p>
      <SignInForm />
    </div>
  );
}

export default signIn;
