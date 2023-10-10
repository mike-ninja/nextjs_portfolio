"use client";

import { useGalaxy } from "@/context/galaxy-context";
import { useTheme } from "@/context/theme-context";
import { GiGalaxy } from "react-icons/gi";

export default function GalaxySwitch() {
  const { toggleGalaxy } = useGalaxy();
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={() => {
        if (theme === "light") {
          toggleTheme();
        }
        toggleGalaxy();
      }}
      className="fixed bottom-5 left-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-gray-950/20 dark:border-white/40  shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
    >
      <GiGalaxy />
    </button>
  );
}
