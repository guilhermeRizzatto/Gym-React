import ListBar from "../Universal/ListBar";
import React from 'react';
import { useEffect, useState } from 'react';
import RefreshButton from "../Universal/RefreshButton";
import Table from "../Trainer/TableTrainer";
import Forms from "../Trainer/FormsTrainer";


function Trainer(){

    // Object Trainer
    const trainer = {
        id : 0,
        name : "",
        email : ""
    }

     //UseState
     const[trainers, setTrainers] = useState([]);
     const [objTrainer, setObjTrainer] = useState(trainer);
     const[btnPost, setBtnPost] = useState(true);


    //UseEffect
    useEffect(() =>{
        fetch("http://localhost:8080/trainers")
        .then(objs => objs.json())
        .then(objs_converted => setTrainers(objs_converted));
    }, []);

    // Get Forms data
    const typing = (e) => {
        setObjTrainer({...objTrainer,[e.target.name]:e.target.value});
    }


    // Post Trainer
    const post = () => {
        fetch("http://localhost:8080/trainers",{
            method:'POST',
            body:JSON.stringify(objTrainer),
            headers:{
                'Content-type':'application/json',
                'Accept':'application/json'
            }
        }) 
        .then(objs => objs.json())
        .then(objs_converted => {
            setTrainers([...trainers, objs_converted]);
            alert("Successful registration");
            cleanForms();
        })
    }

    // Delete Trainer
    const deleteTrainer = () => {
        fetch("http://localhost:8080/trainers/delete" + objTrainer.id,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json',
                'Accept':'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }) 
        .then(objs => objs.json())
        .then(objs_converted => {
            
            //mensage
            alert("Successful Deleted");

            // Copy products array
            let arrayTemp = [...trainer];

            // Index
            let index = arrayTemp.findIndex((p) => {
                return p.id === objTrainer.id;
            });

            // Remove product of arrayTemp
            arrayTemp.splice(index, 1);

            // Refresh array Trainers
            setTrainers(arrayTemp);

            cleanForms();

        })
    }

    // Update Trainer
    const updateTrainer = () => {
        fetch("http://localhost:8080/trainers/patch/" + objTrainer.id,{
            method:'PATCH',
            body:JSON.stringify(objTrainer),
            headers:{
                'Content-type':'application/json',
                'Accept':'application/json'
            }
        }) 
        .then(objs => objs.json())
        .then(objs_converted => {

            alert("Successful updated");
            
            // Copy products array
            let arrayTemp = [...trainer];

            // Index
            let index = arrayTemp.findIndex((p) => {
                return p.id === objTrainer.id;
            });

            // Change product of arrayTemp
            arrayTemp[index] = objTrainer;

            // Refresh array Trainers
            setTrainers(arrayTemp);


            cleanForms();
        })
    }



    // Clean Forms
    const cleanForms = () => {
        setObjTrainer(trainer);
        setBtnPost(true);
    }

    // Select Trainer
    const select = (index) => {
        setObjTrainer(trainers[index]);
        setBtnPost(false);
    }


    return (
    <div>
        <ListBar />
        <Forms button={btnPost} keyboard={typing} post={post} obj = {objTrainer} cancel={cleanForms} remove={deleteTrainer} update={updateTrainer} />
        <Table array={trainers} select={select}/>
        <RefreshButton />
    </div>
    )

}

export default Trainer;