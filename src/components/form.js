import React from 'react'

export default function FormComponent(title, setTitle, description, setDescription) {

    const handleChange = (e) => {
        if (e.target.value === "title") {
            setTitle(e.target.value);
        } else {
            setDescription(e.target.value);
        }
    }

    return (
        <>
            <div className='container my-3 w-50'>
                <div className='row justify-content-center'>
                    <div className='col-md-10'>
                        <form className='p-5' style={{
                            boxShadow: "0 0 100px rgba(0, 0, 0, 0.17)"
                        }}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Title</label>
                                <input type="text" className="form-control rounded-0" id="title" placeholder='Enter your title' value={title} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Description</label>
                                <textarea name="description" id="description" rows="3" className='form-control rounded-0' placeholder='Enter your description' value={description} onChange={handleChange}></textarea>
                            </div>
                            <button className="btn btn-primary rounded-0">Add note</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
