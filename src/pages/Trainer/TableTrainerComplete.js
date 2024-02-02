import React, { useEffect, useState } from "react";

function FormsTrainerComplete({ obj, showListWorkout }) {


  const workout = {
    id: 0,
    description: "",
    gymMembership: {
      id: "",
      name: "",
      phone: "",
      age: "",
      weight: "",
      height: "",
    }
  }

  const [days, setDays] = useState("");
  const [workouts, setWorkouts] = useState([]);
  const [objWorkout, setObjWorkout] = useState(workout);
  const [showList, setShowList] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    daysFun();
    getWorkouts();
    existWorkout();
  });

  const daysFun = () => {
    if (obj.workLoad.days != null) {
      setDays(obj.workLoad.days.join(", "));
    } else {
      setDays("");
    }
  };

  const getWorkouts = () => {
    setWorkouts(obj.workouts);
  }

  const showWorkoutsList = () => {
    if (workouts.length > 0 && showListWorkout === true) {
      return <div className="listWorkoutsTrainerDiv">{
        workouts.map((obj, index) => (
          <ul id="listWorkoutsTrainer" key={index}>
            <button id="buttonsWorkoutsTrainer" onClick={() => { select(index) }} > ID: {obj.id} ({obj.gymMembership.name})</button>
          </ul>
        ))
      }</div>
    }
  }

  const select = (index) => {
    setObjWorkout(workouts[index]);
  }

  const existWorkout = () => {
    if (objWorkout.id != 0) {
      if (workouts.length == 0) {
        setObjWorkout(workout);
      }
    } else return "";
  }

  const handleButtonClick = () => {
    if (showList === true) {
      setShowList(false);
    } else {
      setShowList(true);
    }
  };

  return (
    <div className="divTableTrainerComplete">
      <div className="trainerWorkLoadDaysDiv">
        <div className="trainerDiv">
          <p id="TrainerName">Name: {obj.name}</p>
          <p id="TrainerEmail">Email: {obj.email}</p>
        </div>
        <div className="workLoadDaysDiv">
          <div className="workLoadDiv">
            <p id="TrainerWorkLoad">WorkLoad Times</p>
            <p id="TrainerEntryTime">Entry: {obj.workLoad.entryTime}</p>
            <p id="TrainerDepartureTime">
              Departure: {obj.workLoad.departureTime}
            </p>
          </div>
          <div className="daysDiv">
            <p id="TrainerDaysTitle">Days</p>
            <p id="TrainerDays">{days}</p>
          </div>
        </div>
      </div>
      <div className="workoutGymMemberDiv">
        {
          showList
            ?
            <div className="WorkoutListDiv">
              {showWorkoutsList()}
              <div className="ButtonListDiv">
                <button id="ButtonShowListWorkouts" onClick={handleButtonClick}>Show Workouts</button>
              </div>
            </div>
            :

            <div className="WorkoutListDiv">
              <div className="ButtonListDiv">
                <button id="ButtonShowListWorkouts" onClick={handleButtonClick}>Show Workouts</button>
              </div>
            </div>

        }
        <div className="workoutDiv">
          <p id="TrainerWorkout">Workout</p>
          <p id="TrainerWorkoutId">ID: {objWorkout.id}</p>
          <p id="TrainerDescriptionTitle">Description:</p>
          <p id="TrainerDescription">
            {objWorkout.description}
          </p>
        </div>
        <div className="memberDiv">
          <p id="TrainerWorkoutMember">Membership:</p>
          <p id="TrainerWorkoutMemberId"> ID: {objWorkout.gymMembership.id}</p>
          <p id="TrainerWorkoutMemberName">
            Name: {objWorkout.gymMembership.name}
          </p>
          <p id="TrainerWorkoutMemberPhone">Phone: {objWorkout.gymMembership.phone}</p>
          <p id="TrainerWorkoutMemberAge">Age: {objWorkout.gymMembership.age}</p>
          <p id="TrainerWorkoutMemberWeight">Weight: {objWorkout.gymMembership.weight}</p>
          <p id="TrainerWorkoutMemberHeight">Height: {objWorkout.gymMembership.height}</p>
        </div>
      </div>
    </div>
  );
}

export default FormsTrainerComplete;
