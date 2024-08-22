import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Text style={{ fontSize: 48 }}>home</Text>
      <Link href="/(app)/logout">Log Out</Link>
    </View>
  );
}

export default Home;
