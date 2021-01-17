import React from "react";
import Pricing from "../../Components/Pricing/Pricing";
import "./GetStarted.css";
import { useSelector } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import { signUpObjOne } from "./Data";
import HeroSection from "../../Components/HeroSection/HeroSection";
import { Redirect } from "react-router-dom";

function SignUp() {
  const plans = useSelector((state) => state.plans);

  const { currentUser } = useAuth();
  return (
    <div>
      {!currentUser && plans.plans.active && <HeroSection {...signUpObjOne} />}
      {!currentUser && plans.plans.name === "starter" && (
        <HeroSection {...signUpObjOne} />
      )}
      {!currentUser && plans.plans.active && <Pricing />}
      {!currentUser && !plans.plans.active && <SignUpForm />}
      {currentUser && <Redirect to="/" />}
    </div>
  );
}

export default SignUp;
