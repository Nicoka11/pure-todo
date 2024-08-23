import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";
import { useSession } from "@/lib/auth/context";
import { useNavigation } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function LogOut() {
  const navigation = useNavigation();

  const { signOut } = useSession();
  return (
    <View style={styles.parent}>
      <Text style={styles.text}>Are you sure you want to log out ?</Text>
      <View style={styles.buttons}>
        <PrimaryButton
          title="Log Out"
          onPress={() => {
            signOut();
          }}
        />
        <SecondaryButton title="Dismiss" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    gap: 32,
  },
  buttons: { flexDirection: "column", width: "100%", gap: 16 },
  text: {
    fontSize: 16,
  },
});
