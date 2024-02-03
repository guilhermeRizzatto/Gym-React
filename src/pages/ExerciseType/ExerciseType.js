import ListBar from "../Universal/ListBar";
import { useEffect, useState } from 'react';
import RefreshButton from "../Universal/RefreshButton";
import Table from './ExerciseTypeTable';
import ExerciseTypeForms from "./ExerciseTypeForms";
import React, { useContext } from 'react';
import { MyContext } from '../../useContext';


function ExerciseType(){


    const back = useContext(MyContext);

    // Object exerciseType
    const exerciseType = {
        id : 0,
        name : "",
        muscleGroup : "",
    }
    
    //UseState
    const[exerciseTypes, setexerciseTypes] = useState([]);
    const[objExerciseType, setObjexerciseType] = useState(exerciseType);
    const[btnPost, setBtnPost] = useState(true);
  
//UseEffect
useEffect(() =>{
    fetch("http://" + back.address + "/exerciseTypes")
    .then(objs => objs.json())
    .then(objs_converted => setexerciseTypes(objs_converted));
}, []);

// Get Forms data
const typing = (e) => {
    setObjexerciseType({...objExerciseType,[e.target.name]:e.target.value});
}

// Post exerciseType
const post = () => {
    fetch("http://" + back.address + "/exerciseTypes",{
        method:'POST',
        body:JSON.stringify(objExerciseType),
        headers:{
            'Content-type':'application/json',
            'Accept':'application/json'
        }
    }) 
    .then(objs => objs.json())
    .then(objs_converted => {
        setexerciseTypes([...exerciseTypes, objs_converted]);
        alert("Successful registration");
        cleanForms();
    })
}

// Update exerciseType
const UpdateexerciseType = () => {
    fetch("http://" + back.address + "/exerciseTypes/patch/" + objExerciseType.id,{
        method:'PATCH',
        body:JSON.stringify(objExerciseType),
        headers:{
            'Content-type':'application/json',
            'Accept':'application/json'
        }
    }) 
    .then(objs => objs.json())
    .then(objs_converted => {

        alert("Successful updated");
        
        // Copy products array
        let arrayTemp = [...exerciseTypes];

        // Index
        let index = arrayTemp.findIndex((p) => {
            return p.id === objExerciseType.id;
        });

        // Change product of arrayTemp
        arrayTemp[index] = objExerciseType;

        // Refresh array exerciseTypes
        setexerciseTypes(arrayTemp);


        cleanForms();
    })
}

// DeleteExerciseType
const deleteExerciseType = () => {
    fetch("http://" + back.address + "/exerciseTypes/delete/" + objExerciseType.id, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
    //mensage
    alert("Successful Deleted");

    //Reload page
    window.location.reload();
    
    cleanForms();
}



// Clean Forms
const cleanForms = () => {
    setObjexerciseType(exerciseType);
    setBtnPost(true);
}

// Select exerciseType
const select = (index) => {
    setObjexerciseType(exerciseTypes[index]);
    setBtnPost(false);
}


    return(
        <div>
            <ListBar />
            <ExerciseTypeForms remove={deleteExerciseType} button={btnPost} keyboard={typing} post={post} obj={objExerciseType} cancel={cleanForms} update={UpdateexerciseType}/>
            <Table array={exerciseTypes} select={select}/>
            <RefreshButton />
        </div>
    )
}

export default ExerciseType;