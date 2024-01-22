import React, { useState } from "react";
import { Link } from "react-router-dom";

import TableTrainerComplete from "./TableTrainerComplete";
import ListBar from "../Universal/ListBar";

function TrainerComplete(){


    



    return(
    <div>
        <ListBar />
        <Link to='http://localhost:3000/trainers'><button>Trainers</button></Link>
        <TableTrainerComplete />
    </div>
    )
}

export default TrainerComplete;