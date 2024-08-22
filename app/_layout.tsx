import { SessionProvider } from "@/lib/auth/context";
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <Slot />
      </SessionProvider>
    </QueryClientProvider>
  );
}
