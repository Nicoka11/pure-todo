import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";
import { useSession } from "@/lib/auth/context";
import { useNavigation } from "expo-router";
import { Text, View } from "react-native";

export default function LogOut() {
  const navigation = useNavigation();

  const { signOut } = useSession();
  return (
    <View>
      <Text>Are you sure you want to log out ?</Text>
      <View style={{ flexDirection: "row", width: "100%" }}>
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
