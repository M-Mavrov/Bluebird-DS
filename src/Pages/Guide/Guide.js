import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Pricing from "../../Components/Pricing/Pricing";
import { homeObjOne } from "./Data";

function Guide() {
  return (
    <div>
      <HeroSection {...homeObjOne} />
      <Pricing />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjOne} />
    </div>
  );
}

export default Guide;
