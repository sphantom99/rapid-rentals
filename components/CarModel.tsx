"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Mesh } from "three";
import { useRouter } from "next/router";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

type TCarModelProps = {
  carName: string;
};
export function CarModel(props: TCarModelProps) {
  const { carName } = props;
  function MeshComponent() {
    const fileUrl = "/models/Honda-Civic.gltf"; //`/models/${carName}.gltf`;
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);
    // const obj = useLoader(OBJLoader, fileUrl);

    //   useFrame(() => {
    //     mesh.current.rotation.y += 0.01;
    //   });

    return (
      <mesh position={[-200, -50, 1]} ref={mesh}>
        <primitive object={gltf.scene} />
      </mesh>
    );
  }
  return (
    <Canvas
      style={{ backgroundColor: "lightgray" }}
      camera={{ fov: 75, position: [0, 200, 400] }}
    >
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 100]} />
      <MeshComponent />
    </Canvas>
  );
}
