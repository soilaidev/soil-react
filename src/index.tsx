"use client";
import { useEffect } from "react";
import { initializeSoilAi } from "soilai";

export function useSoilAi() {
  useEffect(() => {
    if (location.hostname.includes("localhost")) {
      const remove = initializeSoilAi("react");

      return () => {
        remove();
      };
    }
  }, []);
}

export function SoilAi() {
  useSoilAi();

  return null;
}
