"use client";

import React, { useEffect, useState } from "react";
import PlanetCanvas from "@/canvas/planet-canvas";

export default function Galaxy() {
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

  if (!gl) {
    return null;
  }

  return (
    <section className="h-screen w-full z-0">
      <PlanetCanvas />
    </section>
  );
}
