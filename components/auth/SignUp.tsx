import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { PrimaryButton } from "@/components/PrimaryButton";
import { supabase } from "@/lib/supabase";

interface FormData {
  password: string;
  passwordConfirm: string;
  email: string;
}
export default function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues: {
      password: "",
      email: "",
    },
  });
  const password = watch("password");

  async function onSubmit(data: FormData) {
    const { error } = await supabase.auth.signUp({
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
                style={{ ...styles.input, marginBottom: 16 }}
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
        <View style={{ width: "100%" }}>
          <Controller
            name="passwordConfirm"
            control={control}
            rules={{
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                textContentType="password"
                secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <Text style={styles.errorMessage}>
            {Boolean(errors.passwordConfirm) && errors.passwordConfirm?.message}
          </Text>
        </View>
      </View>
      <PrimaryButton title="Sign Up" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
    width: "100%",
  },
  input: {
    width: "100%",
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
