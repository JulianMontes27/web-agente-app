"use client";

import { RouteList } from "../navigation/dash-sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

interface RoutesShowcaseProps {
  routes: RouteList;
}

const RouteShowcase: React.FC<RoutesShowcaseProps> = ({ routes }) => {
  const pathname = usePathname();
  // const activeRoute = pathname.split("/")[3];

  return (
    <section>
      <ul className="flex flex-col gap-9">
        {routes.map((route) => {
          return (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "flex flex-row gap-2 text-black dark:text-white w-full p-2",
                route.href === pathname && " bg-gray-200/65  transition-all"
              )}
            >
              {route.icon}
              {/* <span> {route.title}</span> */}
            </Link>
          );
        })}
      </ul>
    </section>
  );
};

export default RouteShowcase;
