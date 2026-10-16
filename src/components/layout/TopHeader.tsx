import { Button } from "primereact/button";
import { useLayout } from "../../hooks/useLayout";

const TopHeader = () => {
  const { sidebarCollapsed, toggleSidebar, openMobileSidebar } = useLayout();

  return (
    <header className="app-header-gradient sticky top-0 z-40 h-14 border-b border-slate-200">
      <div className="flex h-full items-center justify-between px-3 sm:px-4 lg:px-5">
        <div className="flex min-w-0 items-center">
          {/* Desktop Menu */}
          <Button
            icon="pi pi-bars"
            text
            rounded
            className="hidden !h-8 !w-8 !p-0 !text-white lg:inline-flex"
            onClick={toggleSidebar}
            aria-label={
              sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"
            }
          />

          {/* Mobile Menu */}
          <Button
            icon="pi pi-bars"
            text
            rounded
            className="!h-8 !w-8 !p-0 !text-white lg:hidden"
            onClick={openMobileSidebar}
            aria-label="Open navigation"
          />

          {/* Application Name */}
          <div className="ml-2 min-w-0">
            <div className="truncate text-[15px] font-semibold leading-5 text-white">
              Engineering Shift Schedule
            </div>

            <div className="text-[10px] leading-4 text-white/70">SPNI BONE</div>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <div className="mx-2 hidden h-8 w-px bg-slate-200 sm:block" />
          <div className="flex items-center">
            <Button
              type="button"
              label="Logout"
              icon="pi pi-sign-out"
              className="
                !h-9
                !rounded-md
                !border-0
                !bg-[var(--app-logout)]
                !px-4
                !text-sm
                !font-medium
                !text-white
                hover:!brightness-90
                focus:!ring-2
                focus:!ring-[var(--app-logout)]/30
            "
              onClick={() => {
                // TODO: logout logic
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
