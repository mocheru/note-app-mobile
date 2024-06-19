import { useState } from "react";
import Home from "./src/screen/Home";
import AddNote from "./src/screen/addNote";
import EditNote from "./src/screen/editNote";
import { NoteProvider } from "./src/context/NoteContext";

function CurrentPageWidget({ currentPage, setCurrentPage }) {
  switch (currentPage) {
    case "home":
      return <Home setCurrentPage={setCurrentPage} />;
    case "addNote":
      return <AddNote setCurrentPage={setCurrentPage} />;
    case "editNote":
      return <EditNote setCurrentPage={setCurrentPage} />;
    default:
      return <Home />;
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <NoteProvider>
      <CurrentPageWidget
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </NoteProvider>
  );
}
