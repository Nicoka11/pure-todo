import { StyleSheet, View } from "react-native";
import SignIn from "@/components/auth/SignIn";
import { useState } from "react";
import SignUp from "@/components/auth/SignUp";
import { SecondaryButton } from "@/components/SecondaryButton";
import { Logo } from "@/components/Logo";

export default function LoginPage() {
  const [hasAccount, setHasAccount] = useState(true);

  return (
    <View style={styles.container}>
      <Logo />
      {hasAccount ? <SignIn /> : <SignUp />}
      <SecondaryButton
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
});
