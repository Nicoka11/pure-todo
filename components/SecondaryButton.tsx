import React, { useRef } from "react";
import {
  Pressable,
  StyleSheet,
  GestureResponderEvent,
  Animated,
} from "react-native";

interface CustomButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
}

export const SecondaryButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["transparent", "#33333380"],
  });

  return (
    <Pressable
      style={{ width: "100%" }}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={[styles.button, { backgroundColor }]}>
        <Animated.Text style={styles.text}>{title}</Animated.Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 99,
    borderColor: "#ccc",
    borderWidth: 1,
    alignItems: "center",
    paddingVertical: 12,
  },
  text: {
    color: "black",
  },
});
