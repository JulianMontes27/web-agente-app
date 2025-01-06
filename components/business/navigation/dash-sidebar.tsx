import { redirect } from "next/navigation";

import getSession from "@/lib/get-session";
import UserButton from "@/components/auth/user-widget";

import { ModeToggle } from "@/components/theme/theme-toggle-btn";
import RouteShowcase from "../routes/routes-showcase";
import { ChefHat, House, UserIcon } from "lucide-react";

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
    title: "Restaurantes",
    icon: <ChefHat />,
  },

  {
    href: `/dashboard/account`,
    title: "Cuenta",
    icon: <UserIcon />,
  },
];

const Sidebar = async () => {
  /* Check for *cached* auth */
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    return redirect("/api/auth/signin");
  }

  return (
    <section className="fixed h-full flex flex-col gap-6 justify-center items-center bg-gray-100 dark:bg-gray-900/25 w-[100px] pb-6">
      <h1 className="mt-4">LOGO</h1>
      <div className="flex-1">
        <RouteShowcase routes={routes} />
      </div>
      <footer className="flex flex-col items-center justify-center gap-4">
        <ModeToggle />
        <UserButton user={user} />
      </footer>
    </section>
  );
};

export default Sidebar;
