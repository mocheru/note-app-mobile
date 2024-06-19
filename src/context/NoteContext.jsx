import { createContext, useState } from "react";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Note pertama",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    id: 2,
    title: "Note kedua",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
];

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [noteList, setNoteList] = useState(DUMMY_DATA);
  const [currentNote, setCurrentNote] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [idData, setIdData] = useState(0);

  const openModal = (id) => {
    setIdData(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const deleteNote = () => {
    const deletedNote = noteList.filter((note) => note.id !== idData);
    setNoteList(deletedNote);
    closeModal();
  };

  const editNote = (note) => {
    setCurrentNote(note);
  };

  const editCurrentNote = (note) => {
    const filteredNotes = noteList.filter((item) => item.id !== note.id);
    const updatedFilter = [...filteredNotes, note];
    setNoteList(updatedFilter);
  };

  return (
    <NoteContext.Provider
      value={{
        noteList,
        setNoteList,
        currentNote,
        editCurrentNote,
        addNote,
        deleteNote,
        editNote,
        openModal,
        closeModal,
        showModal,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
