import React from 'react';
import { useEffect, useState } from 'react';
import Table from './Auxiliary/Member/TableMember';
import Forms from './Auxiliary/Member/FormsMember';
import ListBar from './Auxiliary/Universal/ListBar';

function Member(){

    // Object Member
    const member = {
        id : 0,
        name : "",
        cpf : "",
        phone : "",
        age : "",
        weight : "",
        height : ""
    }

    //UseState
    const[members, setMembers] = useState([]);
    const [objMember, setObjMember] = useState(member);
    const[btnPost, setBtnPost] = useState(true);
    const[inputCPF, setInputCPF] = useState(true);

    //UseEffect
    useEffect(() =>{
        fetch("http://localhost:8080/gymMembers")
        .then(objs => objs.json())
        .then(objs_converted => setMembers(objs_converted));
    }, []);

    // Get Forms data
    const typing = (e) => {
        setObjMember({...objMember,[e.target.name]:e.target.value});
    }


    // PostMember
    const post = () => {
        fetch("http://localhost:8080/gymMembers",{
            method:'post',
            body:JSON.stringify(objMember),
            headers:{
                'Content-type':'application/json',
                'Accept':'application/json'
            }
        }) 
        .then(objs => objs.json())
        .then(objs_converted => {
            setMembers([...members, objs_converted]);
            alert("sucessful registration");
            cleanForms();
        })
    }

    // Clean Forms
    const cleanForms = () => {
        setObjMember(member);
        setBtnPost(true);
        setInputCPF(true);
    }

    // Select member
    const select = (index) => {
        setObjMember(members[index]);
        setBtnPost(false);
        setInputCPF(false);
    }




    //Retorno
    return(
        <div>
        <ListBar />
        <Forms  button={btnPost} keyboard={typing} post={post} obj = {objMember} input={inputCPF} cancel={cleanForms}/>
        <Table vetor={members} select={select}/>
        </div>
    )
}

export default Member;