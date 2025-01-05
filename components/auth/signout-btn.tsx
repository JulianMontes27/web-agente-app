import { signOut } from "@/auth";

import { Button } from "../ui/button";

export default function SignOutBtn() {
  //check for auth
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button
        type="submit"
        className="dark:bg-gray-700 dark:text-white font-bold text-black bg-gray-300"
      >
        Sign Out
      </Button>
    </form>
  );
}
