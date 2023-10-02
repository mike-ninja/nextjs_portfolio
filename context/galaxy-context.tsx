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
    } else {
      setGalaxy("on");
    }
  };

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
