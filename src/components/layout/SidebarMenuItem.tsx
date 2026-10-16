import { NavLink, useLocation } from "react-router-dom";

import type { AppMenuItem } from "../../types/layout";
import { useLayout } from "../../hooks/useLayout";

interface SidebarMenuItemProps {
  item: AppMenuItem;
  level?: number;
  forceExpanded?: boolean;
}

const SidebarMenuItem = ({
  item,
  level = 0,
  forceExpanded = false,
}: SidebarMenuItemProps) => {
  const { sidebarCollapsed, toggleMenu, isMenuExpanded } = useLayout();

  const location = useLocation();

  const hasChildren = Array.isArray(item.items) && item.items.length > 0;

  const isExpanded = isMenuExpanded(item.key);

  //   Check whether current item or one of its children is active

  const isItemActive = (menuItem: AppMenuItem): boolean => {
    if (menuItem.to && location.pathname === menuItem.to) {
      return true;
    }

    if (menuItem.items) {
      return menuItem.items.some((child) => isItemActive(child));
    }

    return false;
  };

  const itemIsActive = isItemActive(item);
  const isParentHighlighted = hasChildren && (itemIsActive || isExpanded);

  const handleToggle = () => {
    if (hasChildren && (forceExpanded || !sidebarCollapsed)) {
      toggleMenu(item.key);
    }
  };

  //   COLLAPSED SIDEBAR
  if (sidebarCollapsed && !forceExpanded) {
    if (hasChildren) {
      return (
        <div>
          <button
            type="button"
            onClick={handleToggle}
            aria-expanded={isExpanded}
            className={[
              "flex w-full items-center",
              "rounded-md",
              "border-0",
              "text-left text-sm",
              "transition-all duration-200",
              "focus:outline-none",
              "cursor-pointer",

              isParentHighlighted
                ? "border-l-4 border-white bg-white/20 text-white shadow-sm"
                : "border-l-4 border-transparent bg-transparent text-white/90 hover:bg-white/10",
            ].join(" ")}
            style={{
              paddingLeft:
                level === 0
                  ? isParentHighlighted
                    ? "6px"
                    : "10px"
                  : `${6 + level * 24}px`,
              paddingRight: "8px",
              height: "38px",
            }}
          >
            {/* Parent Icon */}
            {item.icon && (
              <i
                className={[
                  item.icon,
                  "mr-3",
                  "shrink-0",
                  "text-[14px]",
                  isParentHighlighted ? "!text-white" : "!text-white/70",
                ].join(" ")}
              />
            )}

            {/* Parent Label */}
            <span
              className={[
                "min-w-0 flex-1 truncate",
                isParentHighlighted
                  ? "font-medium !text-white"
                  : "!text-white/90",
              ].join(" ")}
            >
              {item.label}
            </span>

            {/* Chevron */}
            <i
              className={[
                "pi pi-chevron-down",
                "shrink-0",
                "text-[9px]",
                isParentHighlighted ? "!text-white" : "!text-white/60",
                "transition-transform duration-200",
                isExpanded ? "rotate-180" : "rotate-0",
              ].join(" ")}
            />
          </button>

          {/* Children */}
          {isExpanded && (
            <div>
              {item.items?.map((child) => (
                <SidebarMenuItem
                  key={child.key}
                  item={child}
                  level={level + 1}
                  forceExpanded={forceExpanded}
                />
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <NavLink
        to={item.to ?? "#"}
        title={item.label}
        className={({ isActive }) =>
          [
            "flex h-9 w-full items-center justify-center",
            "rounded-md",
            "transition-colors",
            isActive
              ? "bg-white/90 text-[var(--app-primary)] shadow-sm"
              : "text-white/70 hover:bg-white/10",
          ].join(" ")
        }
      >
        {({ isActive }) =>
          item.icon && (
            <i
              className={[
                item.icon,
                "text-[15px]",
                isActive ? "!text-[var(--app-primary)]" : "!text-white/70",
              ].join(" ")}
            />
          )
        }
      </NavLink>
    );
  }

  // EXPANDABLE ITEM

  if (hasChildren) {
    return (
      <div>
        <button
          type="button"
          onClick={handleToggle}
          aria-expanded={isExpanded}
          className={[
            "flex w-full items-center",
            "rounded-md",
            "border-0 bg-transparent",
            "text-left text-sm",
            "transition-colors",
            "focus:outline-none",
            "cursor-pointer",
            itemIsActive
              ? "!bg-white/50 text-black"
              : "text-white/90 hover:bg-white/10",
          ].join(" ")}
          style={{
            paddingLeft: level === 0 ? "10px" : `${10 + level * 24}px`,
            paddingRight: "8px",
            height: "36px",
          }}
        >
          {item.icon && (
            <i
              className={[
                item.icon,
                "mr-3",
                "shrink-0",
                "text-[14px]",
                itemIsActive ? "!text-[var(--app-logout)]" : "!text-white/70",
              ].join(" ")}
            />
          )}

          <span
            className={[
              "min-w-0 flex-1 truncate",
              itemIsActive ? "text-[var(--app-logout)]" : "text-white/90",
            ].join(" ")}
          >
            {item.label}
          </span>

          <i
            className={[
              "pi pi-chevron-down",
              "shrink-0",
              "text-[9px]",
              itemIsActive ? "!text-[var(--app-primary)]" : "!text-white/60",
              "transition-transform",
              "duration-200",
              isExpanded ? "rotate-180" : "rotate-0",
            ].join(" ")}
          />
        </button>

        {isExpanded && (
          <div>
            {item.items?.map((child) => (
              <SidebarMenuItem
                key={child.key}
                item={child}
                level={level + 1}
                forceExpanded={forceExpanded}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  /*
   * =========================================================
   * NORMAL / LEAF ITEM
   * =========================================================
   */

  return (
    <NavLink
      to={item.to ?? "#"}
      className={({ isActive }) =>
        [
          "flex items-center",
          "rounded-md",
          "text-sm",
          "transition-colors",

          isActive
            ? "bg-white/90 font-medium text-[var(--app-primary)] shadow-sm"
            : "text-white/90 hover:bg-white/10",
        ].join(" ")
      }
      style={{
        paddingLeft: level === 0 ? "10px" : `${10 + level * 24}px`,
        paddingRight: "8px",
        height: "36px",
      }}
    >
      {({ isActive }) => (
        <>
          {item.icon && (
            <i
              className={[
                item.icon,
                "mr-3",
                "shrink-0",
                "text-[14px]",
                isActive ? "!text-[var(--app-primary)]" : "!text-white/70",
              ].join(" ")}
            />
          )}

          <span
            className={isActive ? "text-[var(--app-primary)]" : "text-white/90"}
          >
            {item.label}
          </span>
        </>
      )}
    </NavLink>
  );
};

export default SidebarMenuItem;
