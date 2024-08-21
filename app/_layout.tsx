import { AuthGuard } from "@/components/auth/AuthGuard";
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthGuard>
        <Stack>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="login" options={{ presentation: "modal" }} />
        </Stack>
      </AuthGuard>
    </QueryClientProvider>
  );
}
