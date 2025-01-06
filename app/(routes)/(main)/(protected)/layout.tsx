import Sidebar from "@/components/business/navigation/dash-sidebar";
import { MobileSidebar } from "@/components/business/navigation/mobile-sidebar";
import { routes } from "@/components/business/navigation/dash-sidebar";

interface ProtectedDashboardLayoutProps {
  children: React.ReactNode;
}

const ProtectedDashboardLayout: React.FC<ProtectedDashboardLayoutProps> = ({
  children,
}) => {
  return (
    <main className="h-full w-full flex flex-row ">
      {/* sidebar desktop */}
      <section className="h-full hidden lg:flex flex-col overflow-x-hidden z-999 w-[75px]">
        <Sidebar />
      </section>
      <section className="flex flex-col w-full  h-full lg:ml-[75px] relative">
        {/* mobile-version */}
        <div className="lg:hidden flex flex-row h-[75px] p-4 w-full fixed top-0  z-990 items-center bg-white">
          <div className="flex flex-row gap-4 ">
            <MobileSidebar routes={routes} />
            <h1>LOGO</h1>
          </div>
          <div className="flex-1 flex justify-end">Data</div>
        </div>
        {/* children of layout */}
        <div className="h-full w-full lg:mt-0 mt-[75px] p-3">{children}</div>
      </section>
    </main>
  );
};

export default ProtectedDashboardLayout;
