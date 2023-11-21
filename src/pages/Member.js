import React from 'react';
import { useEffect, useState } from 'react';
import Table from '../Table';
import Forms from '../Forms';
import ListBar from '../ListBar';

function Member(){

    //UseState
    const[members, setMembers] = useState([]);

    //UseEffect
    useEffect(() =>{
        fetch("http://localhost:8080/gymMembers")
        .then(objs => objs.json())
        .then(objs_converted => setMembers(objs_converted));
    }, []);

    return(
        <div>
        <ListBar />
        <Forms />
        <Table vetor={members} />
        </div>
    )
}

export default Member;