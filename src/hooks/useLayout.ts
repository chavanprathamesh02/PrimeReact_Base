import { useContext } from "react";
import { LayoutContext, type LayoutContextType } from "../types/layout";

export const useLayout = (): LayoutContextType => {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error("useLayout must be used inside LayoutProvider");
  }

  return context;
};
