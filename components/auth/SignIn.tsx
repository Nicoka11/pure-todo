import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { PrimaryButton } from "@/components/Button";
import { supabase } from "@/lib/supabase";

interface FormData {
  password: string;
  email: string;
}
export default function SignIn() {
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

  async function onSubmit(data: FormData) {
    console.log(data);
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) Alert.alert(error.message);
  }

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", gap: 8 }}>
        <View style={{ width: "100%" }}>
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
          <Text style={styles.errorMessage}>
            {Boolean(errors.email) && errors.email?.message}
          </Text>
        </View>
        <View style={{ width: "100%" }}>
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
          <Text style={styles.errorMessage}>
            {Boolean(errors.password) && errors.password?.message}
          </Text>
        </View>
      </View>
      <PrimaryButton title="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    gap: 32,
  },
  input: {
    width: "100%",
    height: "auto",
    padding: 10,
    paddingHorizontal: 24,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#ccc",
    borderRadius: 99,
  },
  errorMessage: {
    fontSize: 12,
    color: "#b50220",
  },
});
