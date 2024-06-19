import React, { useContext, useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Modal,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/customButton";
import { NoteContext } from "../context/NoteContext";

function NoteCard({ item, editNote, deleteNote, setCurrentPage }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>{item.desc}</Text>
      <View style={styles.button}>
        <CustomButton
          backgroundColor="#FFC300"
          color="#151D3B"
          text="Ubah"
          fontSize={12}
          width={100}
          onPress={() => {
            editNote(item);
            setCurrentPage("editNote");
          }}
        />
        <CustomButton
          backgroundColor="#D82148"
          color="#fff"
          text="Hapus"
          fontSize={12}
          width={100}
          onPress={() => deleteNote(item.id)}
        />
      </View>
    </View>
  );
}

function Home({ setCurrentPage }) {
  const { noteList, editNote, deleteNote, showModal, closeModal, openModal } =
    useContext(NoteContext);

  const renderEmptyData = () => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <Text style={{ fontSize: 34, fontWeight: 700, color: "#d1d1d1" }}>
          No Data
        </Text>
        <Text style={{ fontSize: 24, color: "#d1d1d1" }}>
          Please Create First
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent={false} backgroundColor={"red"} />
      <CustomButton
        backgroundColor="#DDD"
        color="#203239"
        text="Tambahkan Note"
        width="100%"
        onPress={() => setCurrentPage("addNote")}
      />
      {noteList < 1 ? (
        renderEmptyData()
      ) : (
        <FlatList
          data={noteList}
          renderItem={({ item }) => (
            <NoteCard
              item={item}
              setCurrentPage={setCurrentPage}
              deleteNote={() => openModal(item.id)}
              editNote={editNote}
            />
          )}
          keyExtractor={({ id }) => id}
        />
      )}

      <Modal animationType="slide" visible={showModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalQuestion}>Apakah anda yakin ingin menghapus note ini?</Text>
            <TouchableOpacity onPress={deleteNote}>
              <Text style={styles.modalText}>yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.modalText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 50,
  },
  card: {
    padding: 10,
    marginVertical: 15,
    borderColor: "#ddd",
    borderWidth: 2,
    borderRadius: 5,
  },
  cardTitle: {
    fontWeight: "600",
    color: "#203239",
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  modalContent: {
    padding: 40,
    width: 240,
    backgroundColor: "#D7DBDE",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
  },
  modalText: {
    backgroundColor: "#c1c9c4",
    width: 90,
    fontSize: 24,
    fontWeight: "bold",
    padding: 5,
    borderRadius: 15,
    margin: 5,
    textAlign: "center"
  },
  modalQuestion: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Home;
