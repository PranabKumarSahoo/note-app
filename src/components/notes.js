import React from 'react';

export default function NotesComponent({ element, notes, setNotes, setEditId }) {

    const deleteClick = (id) => {
        const dltNote = notes.filter((elem) => {
            if (elem.id !== id) {
                return elem;
            }
        })
        setNotes(dltNote);
    }

    const editClick = (id) => {
        setEditId(id);
        notes.filter((elem) => {
            if (elem.id == id) {
                document.getElementById("editTitle").value = elem.title;
                document.getElementById("editDescription").value = elem.description;
            }
        })
    }

    return (
        <>
            <div className='d-flex justify-content-center gap-3'>
                <div className="card rounded-0 mt-4" style={{ width: "25rem" }}>
                    <div className="card-body text-capitalize">
                        <h5 className="card-title">{element.title}</h5>
                        <p className="card-text">{element.description}</p>
                        <div className='d-flex justify-content-between'>
                            <button type="button" class="btn btn-primary rounded-0 w-50 me-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => { editClick(element.id) }}>
                                Edit
                            </button>
                            <button href="#" className="btn btn-danger rounded-0 w-50" onClick={() => { deleteClick(element.id) }}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
