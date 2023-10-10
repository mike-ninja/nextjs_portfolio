import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./canvas-loader";
import { animated, useSpring } from "@react-spring/three";

function Planet() {
  const planet = useGLTF("/planet/scene.gltf");

  return (
    <primitive
      object={planet.scene}
      scale={0.5}
    />
  );
}

export default function PlanetCanvas() {
  const [springs, api] = useSpring(
    () => ({
      from: {
        scale: 0,
        opacity: 0,
      },
      to: {
        scale: 1,
        opacity: 1,
      }
    }),
    [],
  );

  const handlePointerEnter = () => {
    api.start({
      scale: 1.1,
    });
  };

  const handlePointerLeave = () => {
    api.start({
      scale: 1,
    });
  };

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
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
        />
        <animated.mesh
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          scale={springs.scale}
        >
          <Planet />
        </animated.mesh>
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
