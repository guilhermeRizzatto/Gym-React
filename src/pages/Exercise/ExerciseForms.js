function ExerciseForms({button, inputIds, cancel, post, remove, update, obj, typing, typingWorkoutId, typingExerciseTypeId}){
    return (
        <form>
            {
                inputIds
                    ?
                    <div className="input1">                       
                        <input type="text" value={obj.exerciseType.id} onChange={typingExerciseTypeId} name="" placeholder="ExerciseType (Id)" className="form-control rounded-0"  />
                        <input type="text" value={obj.workout?.id} onChange={typingWorkoutId} name="" placeholder="Workout (Id)" className="form-control rounded-0"  />
                        <input type="text" value={obj.sets} onChange={typing} name="sets" placeholder="Sets" className="form-control rounded-0"  />
                        <input type="text" value={obj.reps} onChange={typing} name="reps" placeholder="Reps" className="form-control rounded-0"  />
                        <input type="text" value={obj.intervalSeconds} onChange={typing} name="intervalSeconds" placeholder="Interval (In Seconds)" className="form-control rounded-0"  />
                    </div>
                    :
                    <div className="input2">
                        <input type="text" value={obj.sets} onChange={typing} name="sets" placeholder="Sets" className="form-control rounded-0" />
                        <input type="text" value={obj.reps} onChange={typing} name="reps" placeholder="Reps" className="form-control rounded-0"  />
                        <input type="text" value={obj.intervalSeconds} onChange={typing} name="intervalSeconds" placeholder="Interval (In Seconds)" className="form-control rounded-0"  />
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

export default ExerciseForms;