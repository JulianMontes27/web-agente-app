import UserButton from "@/components/auth/user-widget";

import { ModeToggle } from "@/components/theme/theme-toggle-btn";
import RouteShowcase from "../routes/routes-showcase";
import { User } from "next-auth";
import { RouteList } from "@/app/(routes)/(main)/(protected)/layout";

const Sidebar = async ({ user, routes }: { user: User; routes: RouteList }) => {
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
