import React from 'react';
import { useEffect, useState } from 'react';



function Table({ select, obj}) {

    

    const [exercises, setExercises] = useState([]);


    useEffect(() => {
        get();
    }, [obj]);

    const exercisesMap = () => {
        if (exercises.length > 0) {
            return exercises.map((obj, index) => (
                <tr key={index}>
                    <td>{obj.exerciseType?.id}</td>
                    <td>{obj.exerciseType?.name}</td>
                    <td>{obj.exerciseType?.muscleGroup}</td>
                    <td>{obj.sets}</td>
                    <td>{obj.reps}</td>
                    <td>{obj.intervalSeconds}</td>
                    <td><button className="btn btn-primary rounded-0" onClick={() => {select(index, exercises)}}>Select</button></td>
                </tr>
            ))
        }
    }

    function get() {
        if (obj.id != 0) {
            fetch("http://localhost:8080/exercises/byWorkout/" + obj.id)
            .then(objs => objs.json())
            .then(objs_converted => setExercises(objs_converted));
        }
    }

    


    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ExerciseType ID</th>
                        <th>ExerciseType Name</th>
                        <th>ExerciseType Muscle Group</th>
                        <th>Sets</th>
                        <th>Reps</th>
                        <th>Interval (Seconds)</th>
                        <th>Select</th>
                    </tr>
                </thead>
                <tbody>
                    {exercisesMap()}
                </tbody>


            </table>
        </div>
    )
}

export default Table;