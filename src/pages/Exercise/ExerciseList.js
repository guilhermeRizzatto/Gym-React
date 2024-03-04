
//List of workouts to select exercises
function ExerciseList({select, array}){

    return(
        <div>
            <div className="listWorkoutsExercise">
                {
                    array.map((obj, index) => (
                        <ul id="ulWorkoutExercise" key={index}>
                            <button id="buttonWorkoutListExercise" onClick={() => {select(index)}}> Trainer: {obj.trainer.name} (ID:{obj.trainer.id}) | Workout ID: {obj.id} | Member: {obj.gymMembership.name} (ID:{obj.gymMembership.id})</button>
                        </ul>
                    ))
                }
            </div>
        </div>
    )
}

export default ExerciseList;