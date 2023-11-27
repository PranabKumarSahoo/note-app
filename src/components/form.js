import React from 'react';

export default function FormComponent({ title, setTitle, description, setDescription, notes, setNotes }) {

    const handleChange = (e) => {
        if (e.target.id === "title") {
            setTitle(e.target.value);
        } else {
            setDescription(e.target.value);
        }
    }

    const AddClick = (e) => {
        e.preventDefault();

        if (title !== "" && description !== "") {
            setNotes(note => {
                return (
                    [...note, {
                        title: title,
                        description: description,
                        id: new Date().getTime()
                    }]
                )
            })
        } else {
            alert("Please enter something!");
        }

        setTitle("");
        setDescription("");
    }

    return (
        <>
            <div className='container my-3'>
                <div className='row justify-content-center'>
                    <div className='col-md-10'>
                        <form className='p-5' style={{
                            boxShadow: "0 0 100px rgba(0, 0, 0, 0.17)"
                        }}>
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input type="text" className="form-control rounded-0" id="title" placeholder='Enter your title' value={title} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea name="description" id="description" rows="3" className='form-control rounded-0' placeholder='Enter your description' value={description} onChange={handleChange}></textarea>
                            </div>
                            <button className="btn btn-primary rounded-0" onClick={AddClick}>Add note</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
