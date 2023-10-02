"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Galaxy = "on" | "off";

type GalaxyContextType = {
  galaxy: Galaxy;
  toggleGalaxy: () => void;
};

type GalaxyContextProviderProps = {
  children: React.ReactNode;
};

const GalaxyContext = createContext<GalaxyContextType | null>(null);

export default function GalaxyContextProvider({
  children,
}: GalaxyContextProviderProps) {
  const [galaxy, setGalaxy] = useState<Galaxy>("off");

  const toggleGalaxy = () => {
    if (galaxy == "on") {
      setGalaxy("off");
      window.localStorage.setItem("galaxy", "off");
    } else {
      setGalaxy("on");
      window.localStorage.setItem("galaxy", "on");
    }
  };

  useEffect(() => {
    const localGalaxy = window.localStorage.getItem("galaxy") as Galaxy | null;

    if (localGalaxy) {
      setGalaxy(localGalaxy);
    }
  }, []);

  return (
    <GalaxyContext.Provider
      value={{ galaxy, toggleGalaxy }}
    >
      {children}
    </GalaxyContext.Provider>
  );
}

export function useGalaxy() {
  const context = useContext(GalaxyContext);

  if (context === null) {
    throw new Error("useGalaxy must be used within a GalaxyContextProvider");
  }
  return context;
}
