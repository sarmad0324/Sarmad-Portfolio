// tech.jsx

"use client";

import React from "react";
import { BallCanvas } from "../components/canvas/"; 
import StarWrapper from "../hoc/StarWrapper"; 
import { technologies } from "../lib/constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 ">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default StarWrapper(Tech, "tech"); // Use correct function name for wrapper
