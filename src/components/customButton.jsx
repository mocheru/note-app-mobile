import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function CustomButton({
  backgroundColor = "red",
  color = "#fff",
  text = "button",
  fontSize = 18,
  width = 120,
  onPress,
  otherProps,
}) {
  return (
    <TouchableOpacity
      style={Styles.button({ color: backgroundColor, width: width })}
      onPress={onPress}
      {...otherProps}
    >
      <Text style={Styles.buttonText({ fontSize: fontSize, color: color })}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

export const Styles = StyleSheet.create({
  button: ({ color, width }) => ({
    alignItems: "center",
    backgroundColor: color,
    width: width,
    padding: 10,
  }),
  buttonText: ({ fontSize, color }) => ({
    fontSize: fontSize,
    color: color,
    fontWeight: "700",
  }),
});

export default CustomButton;
