import { cookies } from "next/headers"
import { createServerClient } from "@supabase/ssr"


let serverClient: ReturnType<typeof createServerClient> | null = null

export async function getSupabaseServerClient() {
  if (!serverClient) {
    const cookieStore = await cookies();
    serverClient = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
      cookies: {
        get: (name: string) => cookieStore.get(name)?.value,
        set: async (name: string, value: string, options: any) => {
          const store = await cookies();
          store.set({ name, value, ...options });
        },
        remove: async (name: string, options: any) => {
          const store = await cookies();
          store.set({ name, value: "", ...options });
        },
      },
    });
  }
  return serverClient;
}
