import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./canvas-loader";

function Planet() {
  const planet = useGLTF("/planet/scene.gltf");

  return (
    <primitive
      object={planet.scene}
      scale={0.7}
    />
  );
}

export default function PlanetCanvas() {
  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{
        position: [0, 1, 2],
        fov: 50,
        near: 0.1,
        far: 200,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
        />
        <Planet />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
