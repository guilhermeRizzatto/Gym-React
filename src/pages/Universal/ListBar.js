import { Link } from "react-router-dom";


function ListBar(){
    return(

        <div className="listBar">
            <span id="SpanMenu">Menu</span>
            <ul className="Buttons">
                <Link to='http://localhost:3000/member'><button id="gym-button" type="button">Gym Memberships</button></Link>
                <Link to='http://localhost:3000/registrations'><button id="regi-button">Registrations</button></Link>
                <Link to='http://localhost:3000/trainers'><button id="train-button">Trainers</button></Link>
                <Link to='http://localhost:3000/workLoads'><button id="workL-button">WorkLoads</button></Link>
                <button id="workts-button">Workouts</button>
                <button id="exerc-button">Exercises</button>
                <button id="exerType-button">ExercisesTypes</button>
            </ul>
        </div>
    )
}

export default ListBar;