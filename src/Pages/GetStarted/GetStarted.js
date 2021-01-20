import React, { useState } from "react";
import Pricing from "../../Components/Pricing/Pricing";
import "./GetStarted.css";
import { useSelector } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import { getStarted, starter, gold, silver, diamond } from "./Data";
import HeroSection from "../../Components/HeroSection/HeroSection";
import { Redirect } from "react-router-dom";

function SignUp() {
  const [status, setStatus] = useState(null);
  const plans = useSelector((state) => state.plans);

  const { currentUser } = useAuth();
  return (
    <div>
      {!currentUser && plans.plans.active && <HeroSection {...getStarted} />}
      {status === null && (
        <div>
          {!currentUser && plans.plans.name === "starter" && (
            <HeroSection
              {...starter}
              buttonClick={() => setStatus("starter")}
            />
          )}
          {!currentUser && plans.plans.name === "silver" && (
            <HeroSection {...silver} buttonClick={() => setStatus("silver")} />
          )}
          {!currentUser && plans.plans.name === "gold" && (
            <HeroSection {...gold} buttonClick={() => setStatus("gold")} />
          )}
          {!currentUser && plans.plans.name === "diamond" && (
            <HeroSection
              {...diamond}
              buttonClick={() => setStatus("diamond")}
            />
          )}
        </div>
      )}

      {!currentUser && plans.plans.active && <Pricing />}
      {!currentUser && status && <SignUpForm />}
      {currentUser && <Redirect to="/" />}
    </div>
  );
}

export default SignUp;
