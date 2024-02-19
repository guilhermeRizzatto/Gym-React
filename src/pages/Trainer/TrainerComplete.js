import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import TableTrainerComplete from "./TableTrainerComplete";
import ListBar from "../Universal/ListBar";
import ListTrainerComplete from "./ListTrainerComplete";

function TrainerComplete() {

  const back = require("../../auxiliary/addressBackend.js");

  // Object Trainer
  const trainerBase = {
    id: 0,
    name: "",
    email: "",
    workLoad: {
      id: 0,
      entryTime: "",
      departureTime: "",
      days: [],
    },
    workouts: []
  };

  const trainerBaseIdOnly = {
    id: 0,
  };

  var indexZero = 0;

  const select = (index) => {
    setObjTrainerId(trainersComplete[index].id);
    setIndexTrainer(index);
  };

  const getTrainerByInputValue = () => {
    if (!verifyHasTrainerWithID()) {
      setObjTrainerComplete(trainerBase);
      return alert("Do not exist any trainer with this ID: " + objTrainerId);
    } else {
      setObjTrainerComplete(trainersComplete[indexTrainer]);
      setShowListWorkouts(true);
    }
  };

  //UseState
  const [showListWorkouts, setShowListWorkouts] = useState(false);
  const [indexTrainer, setIndexTrainer] = useState(indexZero);
  const [objTrainerId, setObjTrainerId] = useState(trainerBaseIdOnly);
  const [objTrainerComplete, setObjTrainerComplete] = useState(trainerBase);
  const [trainersComplete, setTrainersComplete] = useState([]);

  //UseEffect
  useEffect(() => {
    fetch("http://" + back.address + "/trainers/full")
      .then((objs) => objs.json())
      .then((objs_converted) => setTrainersComplete(objs_converted));
  }, [back]);

  // Get Forms data
  const typing = (e) => {
    setObjTrainerId(e.target.value);
    for (var i = 0; i < trainersComplete.length; i++) {
      if (trainersComplete[i].id == e.target.value) {
        setIndexTrainer(i);
      }
    }
  };

  const verifyHasTrainerWithID = () => {
    var x = 0;
    for (var i = 0; i < trainersComplete.length; i++) {
      if (trainersComplete[i].id == objTrainerId) {
        x++;
      }
    }
    if (x === 0) {
      return false;
    } else return true;
  }


  return (
    <div>
      <ListBar />
      <Link to="/trainers">
        <button id="TrainerCompleteButton">Trainers</button>
      </Link>
      <ListTrainerComplete
        array={trainersComplete}
        objTrainer={objTrainerId}
        keyboard={typing}
        selectTrainerByValueOfInput={getTrainerByInputValue}
        select={select}
      />
      <TableTrainerComplete obj={objTrainerComplete} showListWorkout={showListWorkouts} />
    </div>
  );
}

export default TrainerComplete;
