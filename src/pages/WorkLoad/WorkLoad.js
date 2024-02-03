import ListBar from "../Universal/ListBar";
import { useEffect, useState } from 'react';
import Table from './WorkLoadTable';
import RefreshButton from "../Universal/RefreshButton";
import WorkLoadForms from "./WorkLoadForms";
import { useContext } from 'react';
import { MyContext } from '../../useContext';

function WorkLoad(){


    const back = useContext(MyContext);

    // Object WorkLoad
    const workLoad = {
        id : 0,
        entryTime : "",
        departureTime : "",
        trainer : {
            id : "",
            name: "",
            email: ""
        },
        days : []
    }
    
    //UseState
    const[workLoads, setworkLoads] = useState([]);
    const[objworkLoad, setObjworkLoad] = useState(workLoad);
    const[btnPost, setBtnPost] = useState(true);
    const[inputTrainerId, setInputTrainerId] = useState(true);
  
    

//UseEffect
useEffect(() =>{
    fetch("http://" + back.address + "/workLoads")
    .then(objs => objs.json())
    .then(objs_converted => setworkLoads(objs_converted));
}, []);

// Get Forms data
const typing = (e) => {
    setObjworkLoad({...objworkLoad,[e.target.name]:e.target.value});
}

const typingTrainerId = (e) => {
    setObjworkLoad({...objworkLoad,
        trainer: {
            id: e.target.value
            }
        });
}

const typingDays = (e) => {
    var stringDays = e.target.value;
    setObjworkLoad({...objworkLoad,
        days: stringDays.split(",")           
        });

}

// Post workLoad
const post = () => {
    fetch("http://" + back.address + "/workLoads",{
        method:'POST',
        body:JSON.stringify(objworkLoad),
        headers:{
            'Content-type':'application/json',
            'Accept':'application/json'
        }
    }) 
    .then(objs => objs.json())
    .then(objs_converted => {
        setworkLoads([...workLoads, objs_converted]);
        alert("Successful registration");
        cleanForms();
    })
}

// Update workLoad
const UpdateworkLoad = () => {
    fetch("http://" + back.address + "/workLoads/patch/" + objworkLoad.id,{
        method:'PATCH',
        body:JSON.stringify(objworkLoad),
        headers:{
            'Content-type':'application/json',
            'Accept':'application/json'
        }
    }) 
    .then(objs => objs.json())
    .then(objs_converted => {

        alert("Successful updated");
        
        // Copy products array
        let arrayTemp = [...workLoads];

        // Index
        let index = arrayTemp.findIndex((p) => {
            return p.id === objworkLoad.id;
        });

        // Change product of arrayTemp
        arrayTemp[index] = objworkLoad;

        // Refresh array workLoads
        setworkLoads(arrayTemp);


        cleanForms();
    })
}



// Clean Forms
const cleanForms = () => {
    setObjworkLoad(workLoad);
    setBtnPost(true);
    setInputTrainerId(true);
}

// Select workLoad
const select = (index) => {
    setObjworkLoad(workLoads[index]);
    setBtnPost(false);
    setInputTrainerId(false);
}




    return(
        <div>
            <ListBar />
            <WorkLoadForms button={btnPost} typingDays={typingDays} keyboardInputId={typingTrainerId} keyboard={typing} post={post} obj = {objworkLoad} cancel={cleanForms} update={UpdateworkLoad} inputTrainerId={inputTrainerId}/>
            <Table array={workLoads} select={select}/>
            <RefreshButton />
        </div>
    )
}

export default WorkLoad;