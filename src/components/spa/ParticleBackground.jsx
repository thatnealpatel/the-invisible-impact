import React, { Component } from "react";
import Particles from "react-tsparticles";
import particleConfig from "../../media/polygon_config.json";

class ParticleBackground extends Component {
  render() {
    return(  
      <Particles
        id="tsparticles"
        options={particleConfig}
      />
    )
  }
}

export default ParticleBackground;