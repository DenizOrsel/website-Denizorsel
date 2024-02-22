import React from "react";
import { OrbitControls } from "@react-three/drei";

const House3d = () => {

  return (
    <>
      <OrbitControls />
      <mesh>
        <torusKnotGeometry />
        <meshBasicMaterial color="black" wireframe />
      </mesh>
    </>
  );
};

export default House3d;