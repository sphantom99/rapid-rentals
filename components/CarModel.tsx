"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Mesh } from "three";
function MeshComponent() {
  const fileUrl = "/models/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  //   useFrame(() => {
  //     mesh.current.rotation.y += 0.01;
  //   });

  return (
    <mesh position={[-200, -50, 1]} ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function CarModel() {
  return (
    <Canvas camera={{ fov: 75, position: [200, 200, 200] }} className="">
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <MeshComponent />
    </Canvas>
  );
}
