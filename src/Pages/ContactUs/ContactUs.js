import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";

import { homeObjOne } from "./Data";
import { useAuth } from "../../contexts/AuthContext";

function ContactUs() {
  const { currentUser } = useAuth();
  return (
    <div>
      <button onClick={() => console.log(currentUser.email)}>clkick</button>
      <HeroSection heroColor="blueBg" {...homeObjOne} />
      <HeroSection {...homeObjOne} />
    </div>
  );
}

export default ContactUs;
