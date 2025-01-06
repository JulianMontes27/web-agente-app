import LandingPage from "@/components/landing/landing-page";
import getSession from "@/lib/get-session";
import { redirect } from "next/navigation";

export default async function Home() {
  /* Check User authentication */
  const session = await getSession();
  if (!session) {
    return <LandingPage />;
  }
  /* TODO: Check if the authed User has just created an account (compare the 'createdAt' value to the actual time)*/

  return redirect(`/dashboard/${session.user.id}`)
}
