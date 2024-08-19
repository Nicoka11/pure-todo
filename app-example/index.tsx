import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>HomePage</Text>
      <Link href="/details" style={{ color: "white" }}>
        View Details
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
