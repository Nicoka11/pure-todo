import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Details Page</Text>
      <Link href="/">View homepage</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "FF0000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
