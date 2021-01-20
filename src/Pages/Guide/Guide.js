import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import { dsGuide } from "./Data";

function Guide() {
  return (
    <div>
      <HeroSection {...dsGuide} />
    </div>
  );
}

export default Guide;
