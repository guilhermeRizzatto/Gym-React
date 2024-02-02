
function WorkoutTable({ exercises, obj, array, select }) {


    return (
        <div>
            <div className="listWorkouts">
                {
                    array.map((obj, index) => (
                        <ul id="ulWorkout" key={index}>
                            <button id="buttonWorkoutList" onClick={() => { select(index) }}> Trainer: {obj.trainer.name} (ID:{obj.trainer.id}) | Workout ID: {obj.id} | Member: {obj.gymMembership.name} (ID:{obj.gymMembership.id})</button>
                        </ul>
                    ))
                }
            </div>

            <div className="divWorkoutTable">
                <div className="workoutTITLE">
                    <p id="WorkoutID">Workout ID: {obj.id}</p>
                </div>
                <div className="WorkoutmemberDiv">
                    <p id="textTitle">Membership:</p>
                    <p id="text"> ID: {obj.gymMembership.id}</p>
                    <p id="text">
                        Name: {obj.gymMembership.name}
                    </p>
                    <p id="text">Phone: {obj.gymMembership.phone}</p>
                    <p id="text">Age: {obj.gymMembership.age}</p>
                    <p id="text">Weight: {obj.gymMembership.weight}</p>
                    <p id="text">Height: {obj.gymMembership.height}</p>
                </div>
            </div>

            <div className="divExercises">
                {
                    exercises.map((obj, index) => (
                        <div className="ExercisesDiv" key={index}>
                            <div className="exerciseTypeTable">
                                <p id="exerciseTypeText">ExerciseType ID: {obj.exerciseType?.id}</p>
                                <p id="exerciseTypeText">ExerciseType Name: {obj.exerciseType?.name}</p>
                                <p id="exerciseTypeText">ExerciseType Muscle Group: {obj.exerciseType?.muscleGroup}</p>
                            </div>
                            <div className="exerciseTable">
                                <p id="exerciseText">Exercise Sets: {obj.sets}</p>
                                <p id="exerciseText">Exercise Reps: {obj.reps}</p>
                                <p id="exerciseText">Exercise Interval (Seconds): {obj.intervalSeconds}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div >
    )
}

export default WorkoutTable;