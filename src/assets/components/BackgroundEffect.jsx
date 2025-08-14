// BackgroundEffect.jsx
import React from "react";
import Particles from "./Particles";

const BackgroundEffect = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Radial Gradients */}
      <div className="pointer-events-none absolute inset-0 
        [background:radial-gradient(1000px_600px_at_80%_10%,rgba(56,189,248,0.12),transparent_60%),
                    radial-gradient(900px_500px_at_20%_20%,rgba(168,85,247,0.10),transparent_60%)]" />
      {/* Particles */}
      <div className="absolute inset-0 opacity-50">
        <Particles />
      </div>
    </div>
  );
};

export default BackgroundEffect;
