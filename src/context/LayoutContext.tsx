import { useCallback, useMemo, useState } from "react";
import { LayoutContext, type LayoutProviderProps } from "../types/layout";

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const [mobileSidebarVisible, setMobileSidebarVisible] = useState(false);

  const [expandedMenuKeys, setExpandedMenuKeys] = useState<Set<string>>(
    new Set(),
  );

  const toggleSidebar = useCallback(() => {
    setSidebarCollapsed((previous) => !previous);
  }, []);

  const openMobileSidebar = useCallback(() => {
    setMobileSidebarVisible(true);
  }, []);

  const closeMobileSidebar = useCallback(() => {
    setMobileSidebarVisible(false);
  }, []);

  const toggleMenu = useCallback((key: string) => {
    setExpandedMenuKeys((previous) => {
      const next = new Set(previous);

      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }

      return next;
    });
  }, []);

  const isMenuExpanded = useCallback(
    (key: string) => {
      return expandedMenuKeys.has(key);
    },
    [expandedMenuKeys],
  );

  const value = useMemo(
    () => ({
      sidebarCollapsed,
      mobileSidebarVisible,
      expandedMenuKeys,
      toggleSidebar,
      openMobileSidebar,
      closeMobileSidebar,
      toggleMenu,
      isMenuExpanded,
    }),
    [
      sidebarCollapsed,
      mobileSidebarVisible,
      expandedMenuKeys,
      toggleSidebar,
      openMobileSidebar,
      closeMobileSidebar,
      toggleMenu,
      isMenuExpanded,
    ],
  );

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};
