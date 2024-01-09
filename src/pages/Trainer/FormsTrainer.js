function Forms({button, keyboard, post, obj, cancel, update, remove}) {
    return (
        <form>
                <input type="text" value={obj.name} onChange={keyboard} name="name" placeholder="Name" className="form-control rounded-0" id="trainerName" />
                <input type="text" value={obj.email} onChange={keyboard} name="email" placeholder="Email" className="form-control rounded-0" id="trainerEmail" />                      
            {
                button
                ?
                <button type="button" onClick={post} className="btn btn-success rounded-0">Post</button>
                :
                <div class="d-grid gap-2 d-md-block">
                    <button id="updateButton" onClick={update} type="button" className="btn btn-warning rounded-0">Update</button>
                    <button type="button" onClick={remove} className="btn btn-danger rounded-0">Delete</button>
                    <button type="button" onClick={cancel} className="btn btn-outline-secondary rounded-0">Cancel</button>
                </div>
            }

        </form >
    )
}

export default Forms;
