import { StyleSheet, Text, View } from "react-native";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Redirect } from "expo-router";

export default function App() {
  return <Redirect href="/Home" />;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 32,
    gap: 16,
  },
  title: {
    flexDirection: "row",
    width: "auto",
    alignItems: "flex-end",
  },
  text: {
    fontFamily: "ClashDisplay-Variable",
    fontWeight: "800",
    fontSize: 32,
  },
});
