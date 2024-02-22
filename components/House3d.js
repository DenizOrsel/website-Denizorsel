import React from 'react'
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshNormalMaterial } from 'three';

const House3d = () => {
  const torusRef = useRef();
  

  useFrame(() => {
    torusRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={torusRef}>
      <torusKnotGeometry />
      <meshNormalMaterial />
    </mesh>
  );
}

export default House3d