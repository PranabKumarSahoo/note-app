import './App.css';
import NavbarComponent from "./components/navbar";
import FormComponent from "./components/form";
import NotesComponent from './components/notes';
import EditNotes from './components/editNotes';
import { useState } from 'react';

export default function App() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState(getNotesFromLocalStorage);
  const [editId, setEditId] = useState("");

  localStorage.setItem("notes", JSON.stringify(notes));

  return (
    <>
      <EditNotes editId={editId} notes={notes} setNotes={setNotes} />
      <NavbarComponent />
      <FormComponent
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        notes={notes}
        setNotes={setNotes} />
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <h1 className='text-center fw-bold'>Your Notes</h1>
            {
              notes.length === 0 ?
                <div className='d-flex justify-content-center gap-3'>
                  <div className="card rounded-0 mt-4" style={{ width: "20rem" }}>
                    <div className="card-body text-center">
                      <h5 className="card-title fw-bold">Sorry :&#40;</h5>
                      <p className="card-text text-danger fw-bold">No notes are available for reading.</p>
                    </div>
                  </div>
                </div> : notes.map((element) => {
                  return (
                    <NotesComponent
                      element={element}
                      key={element.id}
                      notes={notes}
                      setNotes={setNotes}
                      setEditId={setEditId}
                    />
                  )
                })
            }
          </div>
        </div>
      </div>
    </>
  );
  function getNotesFromLocalStorage() {
    const note = JSON.parse(localStorage.getItem("notes"));
    if (note) {
      return note;
    } else {
      return [];
    }
  }
}

