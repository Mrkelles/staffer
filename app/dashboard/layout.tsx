
import type { ReactNode } from "react";
import { DashboardNav } from "../components/layout/dashboard-nav";
import { MobileSidebar } from "../components/layout/mobile-sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#F7ECE0] min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="md:hidden flex justify-between items-center mb-4">
          <MobileSidebar />
        </div>
        <div className="grid flex-1 gap-12 md:grid-cols-[220px_1fr]">
          <aside className="hidden w-[220px] flex-col md:flex pr-4 border-r border-[#EFE7E1]">
            <DashboardNav />
          </aside>
          <main className="flex w-full flex-1 flex-col overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
