"use client";

import React, { useEffect, useState } from "react";
import PlanetCanvas from "@/canvas/planet-canvas";
import StarsCanvas from "@/canvas/stars-canvas";
import { useGalaxy } from "@/context/galaxy-context";

export default function Galaxy() {
  const { galaxy } = useGalaxy();
  const [gl, setGL] = useState<RenderingContext | null>(null);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    if (!context) {
      console.error("Error creating WebGL context");
    } else {
      setGL(context);
    }
  }, []);

  if (!gl && galaxy === "on") {
    return (
      <div className="py-20 sm:py-28">
        <small>
          The Galaxy will not show on browsers that does not support WebGL.
        </small>
      </div>
    );
  } else if (!gl || galaxy === "off") {
    return <div className="py-14 sm:py-16"></div>;
  }

  return (
    <section className="h-screen w-full z-0 relative">
      <StarsCanvas />
      <PlanetCanvas />
    </section>
  );
}
