import { Sidebar as PrimeSidebar } from "primereact/sidebar";

import { menuModel } from "../../config/menu";
import { useLayout } from "../../hooks/useLayout";
import SidebarMenuItem from "./SidebarMenuItem";

const MobileSidebar = () => {
  const { mobileSidebarVisible, closeMobileSidebar } = useLayout();

  return (
    <PrimeSidebar
      visible={mobileSidebarVisible}
      onHide={closeMobileSidebar}
      position="left"
      modal
      dismissable
      showCloseIcon
      className="!w-[280px] !max-w-[85vw] !bg-transparent"
      pt={{
        root: {
          className:
            "app-sidebar-gradient !rounded-r-2xl !border-0 !shadow-2xl !opacity-100",
        },

        header: {
          className: "!border-b !border-white/20 !bg-transparent !px-4 !py-3",
        },

        closeButton: {
          className: "!text-white/80 hover:!bg-white/10 hover:!text-white",
        },

        content: {
          className: "!bg-transparent !p-3",
        },

        mask: {
          className: "!bg-black/80",
        },
      }}
    >
      <nav className="h-full overflow-y-auto">
        {menuModel.map((section) => (
          <div key={section.key} className="mb-4">
            {section.label && (
              <div className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wide text-white/60">
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
    </PrimeSidebar>
  );
};

export default MobileSidebar;
