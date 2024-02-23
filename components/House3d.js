import React from "react";
import { Stage, OrbitControls } from "@react-three/drei";

const House3d = () => {
  return (
    <Stage
    >
      <OrbitControls
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
      />
      
      <mesh>
        <octahedronGeometry />
        <meshBasicMaterial color="black" wireframe />
      </mesh>
    </Stage>
  );
};

export default House3d;
