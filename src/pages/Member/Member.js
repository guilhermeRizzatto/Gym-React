import React, { useContext } from 'react';
import { MyContext } from '../../useContext';
import { useEffect, useState } from 'react';
import Table from './TableMember';
import Forms from './FormsMember';
import ListBar from '../Universal/ListBar';
import RefreshButton from "../Universal/RefreshButton";

function Member() {


    const back = useContext(MyContext);

    // Object Member
    const member = {
        id: 0,
        name: "",
        cpf: "",
        phone: "",
        age: "",
        weight: "",
        height: ""
    }

    //UseState
    const [members, setMembers] = useState([]);
    const [objMember, setObjMember] = useState(member);
    const [btnPost, setBtnPost] = useState(true);
    const [inputCPF, setInputCPF] = useState(true);

    //UseEffect
    useEffect(() => {
        fetch("http://" + back.address + "/gymMembers")
            .then(objs => objs.json())
            .then(objs_converted => setMembers(objs_converted));
    }, []);

    // Get Forms data
    const typing = (e) => {
        setObjMember({ ...objMember, [e.target.name]: e.target.value });
    }


    // PostMember
    const post = () => {
        fetch("http://" + back.address + "/gymMembers", {
            method: 'POST',
            body: JSON.stringify(objMember),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(objs => objs.json())
            .then(objs_converted => {
                setMembers([...members, objs_converted]);
                alert("Successful registration");
                cleanForms();
            })
    }

    // DeleteMember
    const deleteMember = () => {
        fetch("http://" + back.address + "/gymMembers/delete/" + objMember.id, {
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

    // UpdateMember
    const UpdateMember = () => {
        fetch("http://" + back.address + "/gymMembers/patch/" + objMember.id, {
            method: 'PATCH',
            body: JSON.stringify(objMember),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(objs => objs.json())
            .then(objs_converted => {

                alert("Successful updated");

                // Copy products array
                let arrayTemp = [...members];

                // Index
                let index = arrayTemp.findIndex((p) => {
                    return p.id === objMember.id;
                });

                // Change product of arrayTemp
                arrayTemp[index] = objMember;

                // Refresh array Members
                setMembers(arrayTemp);


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
    return (
        <div>
            <ListBar />
            <Forms button={btnPost} keyboard={typing} post={post} obj={objMember} input={inputCPF} cancel={cleanForms} remove={deleteMember} update={UpdateMember} />
            <Table array={members} select={select} />
            <RefreshButton />
        </div>
    )
}

export default Member;