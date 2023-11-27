import React from 'react';

export default function EditNotes() {
    return (
        <>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content rounded-0">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit Note</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form className='p-3'>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Title</label>
                                    <input type="text" className="form-control rounded-0" id="editTitle" placeholder='Enter your title' />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Description</label>
                                    <textarea name="description" id="editDescription" rows="3" className='form-control rounded-0' placeholder='Enter your description'></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary rounded-0" data-bs-dismiss="modal">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
