import { useSession } from "@/lib/auth/context";
import { Redirect, Stack } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="logout" options={{ presentation: "modal" }} />
    </Stack>
  );
}
