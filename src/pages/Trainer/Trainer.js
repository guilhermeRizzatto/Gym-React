import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ListBar from "../Universal/ListBar";
import RefreshButton from "../Universal/RefreshButton";
import Table from "../Trainer/TableTrainer";
import Forms from "../Trainer/FormsTrainer";




function Trainer() {

    const back = require("../../auxiliary/addressBackend.js");

    // Object Trainer
    const trainer = {
        id: 0,
        name: "",
        email: ""
    }

    //UseState
    const [trainers, setTrainers] = useState([]);
    const [objTrainer, setObjTrainer] = useState(trainer);
    const [btnPost, setBtnPost] = useState(true);


    //UseEffect
    useEffect(() => {
        fetch("http://" + back.address + "/trainers", {
            headers: { 
                'bypass-tunnel-reminder': '9999',
            }
        })
            .then(objs => objs.json())
            .then(objs_converted => setTrainers(objs_converted));
    }, [back]);

    // Get Forms data
    const typing = (e) => {
        setObjTrainer({ ...objTrainer, [e.target.name]: e.target.value });
    }


    // Post Trainer
    const post = () => {
        fetch("http://" + back.address + "/trainers", {
            method: 'POST',
            body: JSON.stringify(objTrainer),
            headers: {
                'bypass-tunnel-reminder': '9999',
                'Content-type': 'application/json',
                'Accept': 'application/json'
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
        fetch("http://" + back.address + "/trainers/delete/" + objTrainer.id, {
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
        window.location.reload();
        
        cleanForms();

    }

    // Update Trainer
    const updateTrainer = () => {
        fetch("http://" + back.address + "/trainers/patch/" + objTrainer.id, {
            method: 'PATCH',
            body: JSON.stringify(objTrainer),
            headers: {
                'bypass-tunnel-reminder': '9999',
                'Content-type': 'application/json',
                'Accept': 'application/json'
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
            <Link to='/trainersComplete'><button id="TrainerCompleteButton">Trainers Complete</button></Link>
            <Forms button={btnPost} keyboard={typing} post={post} obj={objTrainer} cancel={cleanForms} remove={deleteTrainer} update={updateTrainer} />
            <Table array={trainers} select={select} />
            <RefreshButton />
        </div>
    )

}

export default Trainer;