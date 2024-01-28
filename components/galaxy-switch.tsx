"use client";

import clsx from "clsx";
import { GiGalaxy } from "react-icons/gi";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/theme-context";
import { useGalaxy } from "@/context/galaxy-context";

export default function GalaxySwitch() {
  const { galaxy, toggleGalaxy } = useGalaxy();
  const { theme, toggleTheme } = useTheme();
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
    <button
      onClick={() => {
        if (theme === "light") {
          toggleTheme();
        }
        toggleGalaxy();
      }}
      className={clsx(
        "fixed bottom-5 left-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-gray-950/20 dark:border-white/40  shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950",
        { "animate-bounce": galaxy === "off" },
      )}
    >
      <GiGalaxy />
    </button>
  );
}
