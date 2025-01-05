//This file must be an App Router Route Handler, however, the rest of your app can stay under page/ if you’d like
import { handlers } from "@/auth"; // Referring to the auth.ts we just created
export const { GET, POST } = handlers;
