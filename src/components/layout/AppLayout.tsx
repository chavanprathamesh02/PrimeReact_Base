import type { ReactNode } from "react";

import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import TopHeader from "./TopHeader";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopHeader />
      <div className="flex gap-3 px-2.5 py-3 lg:px-3">
        <Sidebar />

        {/* Main Content */}
        <main className="min-w-0 flex-1">
          <div className="min-h-[calc(100vh-5.75rem)] rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 lg:p-5">
            {children}
          </div>
        </main>
      </div>

      <MobileSidebar />
      {/*
        Footer temporarily disabled.
        <Footer />
      */}
    </div>
  );
};

export default AppLayout;
