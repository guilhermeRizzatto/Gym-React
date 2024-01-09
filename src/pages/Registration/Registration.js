import ListBar from "../Universal/ListBar";
import { useEffect, useState } from 'react';
import Forms from './FormsRegistration';
import Table from "./TableRegistration";
import RefreshButton from "../Universal/RefreshButton";

function Registration(){
    
    // Object Registration
    const registration = {
        id : 0,
        registrationDate : "",
        monthlyPeriod : "",
        price : "",
        installment : "",
        gymMembership : {
            id : ""
        }
    }

    //UseState
    const[registrations, setRegistrations] = useState([]);
    const[objRegistration, setObjRegistration] = useState(registration);
    const[btnPost, setBtnPost] = useState(true);
    const[inputGymMemberId, setGymMemberId] = useState(true);


    //UseEffect
    useEffect(() =>{
        fetch("http://localhost:8080/registrations")
        .then(objs => objs.json())
        .then(objs_converted => setRegistrations(objs_converted));
    }, []);

    // Get Forms data
    const typing = (e) => {
        setObjRegistration({...objRegistration,[e.target.name]:e.target.value});
    }

    const typingMemberId = (e) => {
        setObjRegistration({...objRegistration,
            gymMembership: {
                id: e.target.value
                }
            });
    }


    // PostRegistration
    const post = () => {
        fetch("http://localhost:8080/registrations",{
            method:'POST',
            body:JSON.stringify(objRegistration),
            headers:{
                'Content-type':'application/json',
                'Accept':'application/json'
            }
        }) 
        .then(objs => objs.json())
        .then(objs_converted => {
            setRegistrations([...registrations, objs_converted]);
            alert("Successful registration");
            cleanForms();
        })
    }

    // UpdateRegistration
    const UpdateRegistration = () => {
        fetch("http://localhost:8080/registrations/patch/" + objRegistration.id,{
            method:'PATCH',
            body:JSON.stringify(objRegistration),
            headers:{
                'Content-type':'application/json',
                'Accept':'application/json'
            }
        }) 
        .then(objs => objs.json())
        .then(objs_converted => {

            alert("Successful updated");
            
            // Copy products array
            let arrayTemp = [...registrations];

            // Index
            let index = arrayTemp.findIndex((p) => {
                return p.id === objRegistration.id;
            });

            // Change product of arrayTemp
            arrayTemp[index] = objRegistration;

            // Refresh array Members
            setRegistrations(arrayTemp);


            cleanForms();
        })
    }



    // Clean Forms
    const cleanForms = () => {
        setObjRegistration(registration);
        setBtnPost(true);
        setGymMemberId(true);
    }

    // Select member
    const select = (index) => {
        setObjRegistration(registrations[index]);
        setBtnPost(false);
        setGymMemberId(false);

    }

    return (
        <div>
        <ListBar />
        <Forms  button={btnPost} keyboardInputId={typingMemberId} keyboard={typing} post={post} obj = {objRegistration} cancel={cleanForms} update={UpdateRegistration} inputGymMemberId={inputGymMemberId}/>
        <Table array={registrations} select={select}/>
        <RefreshButton />
        </div>
    )
}

export default Registration;