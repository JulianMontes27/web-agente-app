import Sidebar from "@/components/business/navigation/dash-sidebar";
import { MobileSidebar } from "@/components/business/navigation/mobile-sidebar";
import { modifyRoutesWithUserId } from "@/lib/add-userid-to-routes";
import getSession from "@/lib/get-session";
import { Bot, ChefHat, House, UserIcon } from "lucide-react";
import { redirect } from "next/navigation";

interface Route {
  href: string;
  title: string;
  icon: React.ReactNode;
}
export type RouteList = Route[];

export const routes: RouteList = [
  {
    href: `/dashboard`,
    title: "Dashboard",
    icon: <House />,
  },
  {
    href: `/dashboard/agents`,
    title: "Agents",
    icon: <Bot />,
  },

  {
    href: `/dashboard/account`,
    title: "Account",
    icon: <UserIcon />,
  },
];

interface ProtectedDashboardLayoutProps {
  children: React.ReactNode;
}

const ProtectedDashboardLayout: React.FC<
  ProtectedDashboardLayoutProps
> = async ({ children }) => {
  /* Check for *cached* auth */
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    return redirect("/api/auth/signin");
  }
  const updated_routeList = modifyRoutesWithUserId(user?.id, routes);

  return (
    <main className="h-full w-full flex flex-row ">
      {/* sidebar desktop */}
      <section className="h-full hidden lg:flex flex-col overflow-x-hidden z-999 w-[75px]">
        <Sidebar user={user} routes={updated_routeList} />
      </section>
      <section className="flex flex-col w-full  h-full lg:ml-[75px] relative">
        {/* mobile-version */}
        <div className="lg:hidden flex flex-row h-[75px] p-4 w-full fixed top-0  z-990 items-center bg-white">
          <div className="flex flex-row gap-4 ">
            <MobileSidebar routes={updated_routeList} />
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
