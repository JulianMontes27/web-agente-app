import { auth } from "@/auth";
import SignInBtn from "@/components/auth/signin-btn";
import UserButton from "@/components/auth/user-widget";

export default async function Home() {
  const session = await auth();
  const user = session?.user;
  return (
    <section>
      <div>{!user ? <SignInBtn /> : <UserButton user={user} />}</div>
    </section>
  );
}
