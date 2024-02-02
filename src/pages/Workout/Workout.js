import ListBar from "../Universal/ListBar";
import { useEffect, useState } from 'react';
import WorkoutForms from "./WorkoutForms";
import WorkoutTable from "./WorkoutTable";

function Workout() {

    // Object workout
    const workout = {
        id: 0,
        description: "",
        gymMembership: {
            id: "",
            name: "",
            phone: "",
            age: "",
            weight: "",
            height: ""
        },
        trainer: {
            id: "",
            name: "",
            email: ""
        },
        exercises: []
    }

    //UseState
    const [workouts, setworkouts] = useState([]);
    const [objworkout, setObjworkout] = useState(workout);
    const [btnPost, setBtnPost] = useState(true);
    const [inputIds, setInputIds] = useState(true);
    
    //UseEffect
    useEffect(() => {
        fetch("http://localhost:8080/workouts/full")
            .then(objs => objs.json())
            .then(objs_converted => setworkouts(objs_converted));
    }, []);

    // Get Forms data
    const typing = (e) => {
        setObjworkout({ ...objworkout, [e.target.name]: e.target.value });
    }

    const typingMemberId = (e) => {
        setObjworkout({...objworkout,
            gymMembership: {
                id: e.target.value
                }
            });
    }

    const typingTrainerId = (e) => {
        setObjworkout({...objworkout,
            trainer: {
                id: e.target.value
                }
            });
    }

    // Post workout
    const post = () => {
        fetch("http://localhost:8080/workouts", {
            method: 'POST',
            body: JSON.stringify(objworkout),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(objs => objs.json())
            .then(objs_converted => {
                setworkouts([...workouts, objs_converted]);
                alert("Successful registration");
                //Reload page
                window.location.reload();
                cleanForms();
            })
    }

    // Update workout
    const Updateworkout = () => {
        fetch("http://localhost:8080/workouts/patch/" + objworkout.id, {
            method: 'PATCH',
            body: JSON.stringify(objworkout),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(objs => objs.json())
            .then(objs_converted => {

                alert("Successful updated");

                // Copy products array
                let arrayTemp = [...workouts];

                // Index
                let index = arrayTemp.findIndex((p) => {
                    return p.id === objworkout.id;
                });

                // Change product of arrayTemp
                arrayTemp[index] = objworkout;

                // Refresh array workouts
                setworkouts(arrayTemp);


                cleanForms();
            })
    }

    // Deleteworkout
    const deleteworkout = () => {
        fetch("http://localhost:8080/workouts/delete/" + objworkout.id, {
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
        setObjworkout(workout);
        setBtnPost(true);
        setInputIds(true);
    }

    // Select workout
    const select = (index) => {
        setObjworkout(workouts[index]);
        setBtnPost(false);
        setInputIds(false);
    }



    return (
        <div>
            <ListBar />
            <WorkoutForms inputIds={inputIds} typingTrainerId={typingTrainerId} typingMemberId={typingMemberId} remove={deleteworkout} button={btnPost} keyboard={typing} post={post} obj={objworkout} cancel={cleanForms} update={Updateworkout} />
            <WorkoutTable exercises={objworkout.exercises} obj={objworkout} array={workouts} select={select}/>
        </div>
    )
}

export default Workout;