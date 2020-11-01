import React from "react";
import ParticleBackground from "./spa/ParticleBackground";

const prompts = {
  1: "How do you think you could improve your impact on the ecological system of Athens? [1]",
  2: "What do you think communities can do to increase the environmental viability of their area? [2]",
  3: "What frustrates you about environmental justice? [3]",
  4: "Do you think the government is holding up its end of the bargain in relation to environmental justice? [4]",
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