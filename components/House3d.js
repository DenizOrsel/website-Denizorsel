import React from "react";
import { Stage, OrbitControls, useGLTF } from "@react-three/drei";

const House3d = () => {
  const { nodes } = useGLTF("/untitled.glb");
  return (
    <Stage>
      <OrbitControls
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
      />

      <mesh>
        <octahedronGeometry />
        <meshBasicMaterial color="black" wireframe />
      </mesh>
      {/* <primitive object={nodes.Untitled} /> */}
    </Stage>
  );
};

export default House3d;
