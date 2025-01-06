import Link from "next/link";
import getSession from "@/lib/get-session";
import { redirect } from "next/navigation";

import UserButton from "@/components/auth/user-widget";
import { ModeToggle } from "@/components/theme/theme-toggle-btn";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { RouteList } from "./dash-sidebar";
import { Separator } from "@/components/ui/separator";

export const MobileSidebar = async ({ routes }: { routes: RouteList }) => {
  //check for auth (cached)
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    return redirect("/api/auth/signin");
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      <SheetContent className="">
        <SheetHeader className="flex items-center">
          <SheetTitle>Agente</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full w-full lg:hidden items-center">
          <div className="flex-1 items-start flex flex-col gap-3 w-full">
            {routes.map((route) => (
              <div className="w-full" key={route.href}>
                <Link href={route.href} className="flex flex-row gap-2">
                  {route.icon}
                  {route.title}
                </Link>
                <Separator />
              </div>
            ))}
          </div>

          <div className="flex items-center w-full justify-center  gap-3">
            <UserButton user={user} />
            <ModeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
