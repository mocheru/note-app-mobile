import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, KeyboardAvoidingView } from "react-native";
import CustomTextInput from "../components/customTextInput";
import CustomButton from "../components/customButton";
import { NoteContext } from "../context/NoteContext";

function addNote({ setCurrentPage }) {
  const { addNote } = useContext(NoteContext);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <KeyboardAvoidingView behavior="heigt" style={stylesInput.container}>
      <Text style={stylesInput.pageTitle}>Tambahkan Note</Text>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Judul"
        placeholder="Judul"
        numberOfLines={1}
        multiline={false}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Deskripsi"
        placeholder="Deskripsi"
        multiline
        numberOfLines={4}
      />
      <View style={stylesInput.spacerTop}>
        <CustomButton
          backgroundColor="#247881"
          color="#fff"
          text="Simpan"
          width="100%"
          onPress={() => {
            addNote(title, desc);
            setCurrentPage("home");
          }}
          disabled={title === ""}
        />
      </View>
      <View style={stylesInput.spacerTop}>
        <CustomButton
          backgroundColor="#DDDDDD"
          color="#203239"
          text="Kembali ke Home"
          width="100%"
          onPress={() => setCurrentPage("home")}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

export default addNote;

export const stylesInput = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  pageTitle: {
    fontSize: 20,
  },
  spacerTop: {
    marginTop: 20,
  },
});
