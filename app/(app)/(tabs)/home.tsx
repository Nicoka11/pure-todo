import { Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { SecondaryButton } from "@/components/SecondaryButton";

export function Home() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 16,
      }}
    >
      <Text style={{ fontSize: 48 }}>home</Text>
      <SecondaryButton
        title="Log Out"
        onPress={() => router.push("/(app)/logout")}
      />
    </View>
  );
}

export default Home;
