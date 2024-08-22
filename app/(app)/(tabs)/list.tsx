import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export function List() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
      }}
    >
      <Link href="/list/1" style={{ fontSize: 32 }}>
        Page 1
      </Link>
      <Link href="/list/2" style={{ fontSize: 32 }}>
        Page 2
      </Link>
      <Link href="/list/3" style={{ fontSize: 32 }}>
        Page 3
      </Link>
    </View>
  );
}

export default List;
