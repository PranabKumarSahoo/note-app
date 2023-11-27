import React from 'react'

export default function NotesComponent() {
    return (
        <>
            <div className='d-flex justify-content-center gap-3'>
                <div className="card rounded-0 mt-4" style={{ width: "18em" }}>
                    <div className="card-body">
                        <h5 className="card-title">Title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='d-flex justify-content-between'>
                            <button type="button" class="btn btn-primary rounded-0 w-50 me-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Edit
                            </button>
                            <button href="#" className="btn btn-danger rounded-0 w-50">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
