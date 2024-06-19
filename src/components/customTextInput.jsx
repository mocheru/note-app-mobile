import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

function CustomTextInput({
  text,
  onChange,
  label,
  multiline,
  numberOfLines,
  value,
}) {
  return (
    <View style={styles.textInputWrapper}>
      <Text>{label}</Text>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={styles.input}
        placeholder={label}
        onChangeText={onChange}
        defaultValue={text}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputWrapper: {
    marginTop: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: "#DDD",
    padding: 10,
  },
});

export default CustomTextInput;
