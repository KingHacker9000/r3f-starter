import { Box, OrbitControls, Sphere, Html  } from "@react-three/drei";
import React, { useState } from "react";

export const Experience = () => {

  return (
    <>
      <ambientLight intensity={0} color="#ffe2a6" />

      <OrbitControls />
    </>
  );
};
