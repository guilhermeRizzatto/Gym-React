function WorkoutForms({ inputIds, typingTrainerId, typingMemberId, remove, button, keyboard, post, cancel, update, obj }) {
    return (
        <form>
            {
                inputIds
                    ?
                    <div>
                        <div class="input-group">
                            <span class="input-group-text rounded-0">Description</span>
                            <textarea class="form-control rounded-0" value={obj.description} onChange={keyboard} name="description" ></textarea>
                        </div>
                        <input type="text" value={obj.gymMembership.id} onChange={typingMemberId} name="" placeholder="Gym Membership (Id)" className="form-control rounded-0" id="ExerciseTypeMuscleGroup" />
                        <input type="text" value={obj.trainer.id} onChange={typingTrainerId} name="" placeholder="Trainer (Id)" className="form-control rounded-0" id="ExerciseTypeMuscleGroup" />
                    </div>
                    :
                    <div>
                        <div class="input-group">
                            <span class="input-group-text rounded-0">Description</span>
                            <textarea class="form-control rounded-0" value={obj.description} onChange={keyboard} name="description" ></textarea>
                        </div>
                    </div>
            }

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

export default WorkoutForms;

