import React, { useContext, useEffect, useState } from "react";
import { Text, View, KeyboardAvoidingView } from "react-native";
import CustomTextInput from "../components/customTextInput";
import CustomButton from "../components/customButton";
import { NoteContext } from "../context/NoteContext";
import { stylesInput } from "./addNote";

function editNote({ setCurrentPage }) {
  const { currentNote, editCurrentNote } = useContext(NoteContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    setTitle(currentNote.title);
    setDesc(currentNote.desc);
  }, [currentNote]);

  return (
    <KeyboardAvoidingView behavior="heigt" style={stylesInput.container}>
      <Text style={stylesInput.pageTitle}>Edit Note</Text>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Judul"
        placeholder="Judul"
        numberOfLines={1}
        multiline={false}
        value={title}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Deskripsi"
        placeholder="Deskripsi"
        multiline
        numberOfLines={4}
        value={desc}
      />
      <View style={stylesInput.spacerTop}>
        <CustomButton
          backgroundColor="#247881"
          color="#fff"
          text="Simpan"
          width="100%"
          onPress={() => {
            editCurrentNote({
              id: currentNote.id,
              title: title,
              desc: desc,
            });
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

export default editNote;
