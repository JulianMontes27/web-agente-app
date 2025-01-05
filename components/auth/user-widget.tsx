import { User } from "next-auth";

import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { signOut } from "@/auth";
import { LogOut, Settings, ShieldCheck } from "lucide-react";

interface UserButtonProps {
  user: User;
}

export default function UserButton({ user }: UserButtonProps) {
//   const user_role = user.role;
  const handleLogout = async () => {
    "use server";

    // // Call NextAuth's signOut method to log out the user
    await signOut({ redirectTo: "/" });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" className="flex-none rounded-full">
          <Image
            src={user.image!}
            alt="User profile picture"
            width={50}
            height={50}
            className="aspect-square rounded-full bg-background object-cover"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{user.name || "User"}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/settings">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        {/* <DropdownMenuItem asChild>
          {user_role === "admin" ? (
            <Link
              className="flex flex-row items-center justify-start gap-2"
              href={`/${user.id}/admin-dashboard`}
            >
              <ShieldCheck className="h-4 w-4" />
              Dashboard
            </Link>
          ) : null}
        </DropdownMenuItem>
        <DropdownMenuSeparator /> */}
        <DropdownMenuItem asChild>
          <form action={handleLogout}>
            <button className="flex w-full items-center">
              <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
