import React from "react";
import Particles from "react-tsparticles";
import ParticleConfig from "./ParticleConfig";

function ParticleBg() {
  return (
    <div>
      <Particles params={ParticleConfig}></Particles>
    </div>
  );
}

export default ParticleBg;
