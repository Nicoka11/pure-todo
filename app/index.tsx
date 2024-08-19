import { StyleSheet, Text, TextInput, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { PrimaryButton } from "@/components/Button";

interface FormData {
  password: string;
  email: string;
}
export default function Index() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ ...styles.text, fontSize: 48 }}>PURE</Text>
        <Text style={styles.text}>todo</Text>
      </View>
      <Controller
        name="email"
        control={control}
        rules={{
          required: "Email is required",
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            textContentType="emailAddress"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters long",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Password"
            textContentType="password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <PrimaryButton title="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 32,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
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
