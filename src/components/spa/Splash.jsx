import React from "react";
import Typist from "react-typist";
import ParticleBackground from "./ParticleBackground";

// className="title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"

const cursorProps = {blink: true};

const Splash = () => {
  return (
    <div className="splash">
      <ParticleBackground/>
      <div className="splash-text">
        <Typist cursor={cursorProps}>
          {"The Invisible Impact "}
         </Typist>
      </div>
    </div>
  );
};

export default Splash;