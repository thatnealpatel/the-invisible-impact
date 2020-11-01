import React, { useState } from "react";
import ParticleBackground from "./spa/ParticleBackground";

const prompts = {
  1: "[1] How do you think you could improve your impact on the ecological system of Athens?",
  2: "[2] Do you like pizza?",
  3: "[3] Ever left the country?",
  4: "[4] Stop using plastic?",
};

const Qr = () => {
  var rand = 1 + Math.floor((Math.random() * (4)));
  return (
    <div className="prompt">
      <ParticleBackground/>
      <div className="prompt-text">
        <p>{prompts[rand]}</p>
      </div>
    </div>
  );
};

export default Qr;