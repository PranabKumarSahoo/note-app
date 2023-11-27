import React from 'react';

export default function EditNotes({ editId, notes, setNotes }) {

    const updateClick = () => {
        const updateNote = notes.map((elem) => {
            if (editId === elem.id) {
                return (
                    {
                        ...elem, title: document.getElementById("editTitle").value,
                        description: document.getElementById("editDescription").value
                    }
                )
            } else {
                return elem;
            }
        })
        setNotes(updateNote);
    }

    return (
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='p-3'>
                                <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input type="text" className="form-control rounded-0" id="editTitle" placeholder='Enter your title' />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea name="description" id="editDescription" rows="3" className='form-control rounded-0' placeholder='Enter your description'></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary rounded-0" data-bs-dismiss="modal" onClick={updateClick}>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}