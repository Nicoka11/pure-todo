import { StyleSheet, Text, View } from "react-native";
import { PrimaryButton } from "@/components/Button";
import SignIn from "@/components/auth/SignIn";
import { useState } from "react";
import SignUp from "@/components/auth/SignUp";

export default function Index() {
  const [hasAccount, setHasAccount] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ ...styles.text, fontSize: 48 }}>PURE</Text>
        <Text style={styles.text}>todo</Text>
      </View>
      {hasAccount ? <SignIn /> : <SignUp />}
      <PrimaryButton
        title={hasAccount ? "Register" : "Already Account ? Sign In"}
        onPress={() => setHasAccount((s) => !s)}
      />
    </View>
  );
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
