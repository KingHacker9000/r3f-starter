import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import {Physics} from "@react-three/rapier";
import React, { Suspense, useMemo, useState } from "react";
import Loader from "./components/Loader";

function App() {

  return (
    <>
        <Canvas shadows camera={{ position: [0, 0, 0], fov: 30 }}>
        <Loader />
          {/* <color attach="background" args={["#02ccfe"]} />
          <Suspense fallback={<Loader />}>
            <Physics>
              <Experience />
              
            </Physics>
          </Suspense> */}
        </Canvas>
        
    </>
  );
}

export default App;
