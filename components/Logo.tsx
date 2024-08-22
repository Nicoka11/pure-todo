import { StyleSheet, Text, View } from "react-native";

export function Logo() {
  return (
    <View style={styles.title}>
      <Text style={{ ...styles.text, fontSize: 48 }}>PURE</Text>
      <Text style={styles.text}>todo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
