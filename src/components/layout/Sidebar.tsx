import { menuModel } from "../../config/menu";
import { useLayout } from "../../hooks/useLayout";
import SidebarMenuItem from "./SidebarMenuItem";
import { Avatar } from "primereact/avatar";

const Sidebar = () => {
  const { sidebarCollapsed } = useLayout();

  return (
    <aside
      className={[
        "hidden lg:flex",
        "sticky top-3 h-[calc(100vh-5.75rem)]",
        "shrink-0 flex-col",
        "rounded-xl border border-slate-200",
        "app-sidebar-gradient",
        "shadow-sm",
        "transition-all duration-300",
        sidebarCollapsed ? "w-[64px]" : "w-[210px]",
      ].join(" ")}
    >
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2.5 py-4">
        {menuModel.map((section) => (
          <div key={section.key} className="mb-4">
            {section.label && (
              <div className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                {section.label}
              </div>
            )}

            <div className="space-y-0.5">
              {section.items?.map((item) => (
                <SidebarMenuItem key={item.key} item={item} />
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* User */}
      {!sidebarCollapsed && (
        <div className="border-t border-white/20 p-2.5">
          <div className="flex items-center gap-2 rounded-lg px-2 py-2">
            <Avatar
              label="PC"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                color: "var(--app-primary)",
              }}
              shape="circle"
            />

            <div className="min-w-0">
              <div className="truncate text-xs font-medium text-white">
                Prathamesh Chavan
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
