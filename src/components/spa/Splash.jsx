import React from "react";
import Typist from "react-typist";
import ParticleBackground from "./ParticleBackground";

// className="title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"

const cursorProps = {blink: true};

const Splash = () => {

  // useEffect(() => {
  //   hotjar.initialize(2074195, 6);
  // }, [])
  
  return (
    <section id="splash" className="splash section">
      <ParticleBackground/>
      <div className="splash-text">
        <Typist cursor={cursorProps}>
          {"The Invisible Impact "}
         </Typist>
      </div>
    </section>
  );
};

export default Splash;