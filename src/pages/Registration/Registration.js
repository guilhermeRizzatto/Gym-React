import ListBar from "../Universal/ListBar";
import { useEffect, useState } from 'react';
import Forms from './FormsRegistration';
import Table from "./TableRegistration";
import RefreshButton from "../Universal/RefreshButton";

function Registration(){

    const back = require("../../auxiliary/addressBackend.js");
    
    // Object Registration
    const registration = {
        id : 0,
        registrationDate : "",
        monthlyPeriod : "",
        price : "",
        installment : "",
        valid: false,
        installmentPrice: "",
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
        fetch("https://"+ back.address + "/registrations", {
            headers: {
                'bypass-tunnel-reminder': '9999',
            }
        })
        .then(objs => objs.json())
        .then(objs_converted => setRegistrations(objs_converted));
    }, [back]);

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


    // Post Registration
    const post = () => {
        fetch("https://" + back.address + "/registrations",{
            method:'POST',
            body:JSON.stringify(objRegistration),
            headers:{
                'bypass-tunnel-reminder': '9999',
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

    // Update Registration
    const UpdateRegistration = () => {
        fetch("https://" + back.address + "/registrations/patch/" + objRegistration.id,{
            method:'PATCH',
            body:JSON.stringify(objRegistration),
            headers:{
                'bypass-tunnel-reminder': '9999',
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

            // Refresh array Registrations
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

    // Select registration
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