import ListBar from "../Universal/ListBar";
import { useEffect, useState } from 'react';
import ExerciseList from "./ExerciseList";
import ExerciseTable from "./ExerciseTable";
import ExerciseForms from "./ExerciseForms";
import RefreshButton from "../Universal/RefreshButton";


function Exercise() {

    const back = require("../../auxiliary/addressBackend.js");

    const workout = {
        id: "",
        description: "",
        gymMembership: {
            id: "",
            name: ""
        },
        trainer: {
            id: "",
            name: ""
        },
        exercises: []
    }

    const exercise = {
        exerciseType: {
            id: ""
        },
        workout: {
            id: ""
        },
        sets: "",
        reps: "",
        intervalSeconds: ""
    }

    useEffect(() => {
        fetch("https://" + back.address + "/workouts", {
            headers: {
                'bypass-tunnel-reminder': '9999',
            }
        })
            .then(objs => objs.json())
            .then(objs_converted => setworkouts(objs_converted));
    }, [back]);


    const [workouts, setworkouts] = useState([]);
    const [objworkout, setObjworkout] = useState(workout);
    const [objExercise, setObjExercise] = useState(exercise);
    const [exercises, setExercises] = useState([])
    const [btnPost, setBtnPost] = useState(true);
    const [inputIds, setInputIds] = useState(true);

    
    // Get Forms data
    const typing = (e) => {
        setObjExercise({ ...objExercise, [e.target.name]: e.target.value });
    }
    
    const typingExerciseTypeId = (e) => {
        setObjExercise({
            ...objExercise,
            exerciseType: {
                id: e.target.value
            }
        });
    }
    
    const typingWorkoutId = (e) => {
        setObjExercise({
            ...objExercise,
            workout: {
                id: e.target.value
            }
        });
    }
    
    const post = () => {
        fetch("https://" + back.address + "/exercises", {
            method: 'POST',
            body: JSON.stringify(objExercise),
            headers: {
                'bypass-tunnel-reminder': '9999',
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
        alert("Successful registration");
        //Reload page
        window.location.reload();
        cleanForms();
        
    }
    
    const UpdateExercise = () => {
        fetch("https://" + back.address + "/exercises/patch/workout/" + objworkout.id + "/exerciseType/" + objExercise.exerciseType.id,{
            method: 'PATCH',
            body: JSON.stringify(objExercise),
            headers: {
                'bypass-tunnel-reminder': '9999',
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
        alert("Successful updated");
        //Reload page
        window.location.reload();
        cleanForms();
        
    }
    
    const deleteExercise = () => {
        fetch("https://" + back.address + "/exercises/delete/workout/" + objworkout.id + "/exerciseType/" + objExercise.exerciseType.id, {
            method: 'DELETE',
            headers: {
                'bypass-tunnel-reminder': '9999',
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        //mensage
        alert("Successful Deleted");
        
        //Reload page
        
        cleanForms();
    }
    
    // Clean Forms
    const cleanForms = () => {
        setObjExercise(exercise);
        setBtnPost(true);
        setInputIds(true);
    }
    
    const select = (index) => {
        setObjworkout(workouts[index]);
    }
    
    const selectExercise = (index, arrayExercises) => {
        setObjExercise(arrayExercises[index]);
        setBtnPost(false);
        setInputIds(false);
    }
    
    
    return (
        <div>
            <ListBar />
            <ExerciseList select={select} array={workouts} />
            <ExerciseForms button={btnPost} inputIds={inputIds} cancel={cleanForms} obj={objExercise} typing={typing} typingExerciseTypeId={typingExerciseTypeId} typingWorkoutId={typingWorkoutId} remove={deleteExercise} update={UpdateExercise} post={post}/>
            <ExerciseTable select={selectExercise} obj={objworkout} />
            <RefreshButton />
        </div>
    )
}

export default Exercise;