import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ListItem() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen options={{ headerTitle: `Details n°${id}` }} />
      <Text>Details List Page : {id}</Text>
    </View>
  );
}
