import React, { useEffect } from "react";
import ParticleBackground from "./spa/ParticleBackground";
import { hotjar } from 'react-hotjar';

const prompts = {
  1: "Who should bear the greatest responsibility in repairing ecosystems and lives damaged \
      by environmental problems? [1]",

  2: "How do you see yourself becoming involved in environmental justice beyond acts of \
      consumption (e.g. buying 'sustainable' products)? [2]",

  3: "What frustrates you about environmental justice? [3]",
  
  4: "What should our top environmental concern be? [4]",
};

const Qr = () => {
  
  useEffect(() => {
    hotjar.initialize(2074195, 6);
  }, [])
  
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