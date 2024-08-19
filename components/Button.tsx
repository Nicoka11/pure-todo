import { Button, ButtonProps, StyleSheet } from "react-native";

export interface CustomButtonProps extends ButtonProps {}

export const ButtonPrimary = (props: CustomButtonProps) => {
  return <Button color="black" {...props} />;
};

const styles = StyleSheet.create({
  primary: {
    backgroundColor: "black",
    color: "white",
    borderRadius: 99,
    alignItems: "center",
    paddingVertical: 8,
    width: "100%",
  },
});

console.log(styles);
