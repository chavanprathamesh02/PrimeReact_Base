import { createContext, type ReactNode } from "react";

export interface LayoutContextType {
  sidebarCollapsed: boolean;
  mobileSidebarVisible: boolean;

  expandedMenuKeys: Set<string>;

  toggleSidebar: () => void;
  openMobileSidebar: () => void;
  closeMobileSidebar: () => void;

  toggleMenu: (key: string) => void;
  isMenuExpanded: (key: string) => boolean;
}

export interface LayoutProviderProps {
  children: ReactNode;
}

export const LayoutContext = createContext<LayoutContextType | undefined>(
  undefined,
);

export interface AppMenuItem {
  key: string;
  label: string;
  icon?: string;
  to?: string;
  items?: AppMenuItem[];
}
