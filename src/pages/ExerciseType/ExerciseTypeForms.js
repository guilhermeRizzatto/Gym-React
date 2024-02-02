function exerciseTypeForms({remove, button, keyboard, post, obj, cancel, update}) {
    return (
        <form>
            <div>
                <input type="text" value={obj.name} onChange={keyboard} name="name" placeholder="Exercise Name" className="form-control rounded-0" id="ExerciseTypeName" />
                <input type="text" value={obj.muscleGroup} onChange={keyboard} name="muscleGroup" placeholder="Muscle Group" className="form-control rounded-0" id="ExerciseTypeMuscleGroup" />
            </div>
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
        </form>
    )
}

export default exerciseTypeForms;