import './App.css';
import NavbarComponent from "./components/navbar";
import FormComponent from "./components/form";
import NotesComponent from './components/notes';
import EditNotes from './components/editNotes';
import { useState } from 'react';

function App() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <EditNotes />
      <NavbarComponent />
      <FormComponent title={title} setTitle={setTitle} description={description} setDescription={setDescription} />
      <NotesComponent />
    </>
  );
}

export default App;
