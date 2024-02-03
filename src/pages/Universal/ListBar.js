import { Link } from "react-router-dom";


function ListBar(){
    return(

        <div className="listBar">
            <span id="SpanMenu">Menu</span>
            <ul className="Buttons">
                <Link to='/member'><button id="gym-button" type="button">Gym Memberships</button></Link>
                <Link to='/registrations'><button id="regi-button">Registrations</button></Link>
                <Link to='trainers'><button id="train-button">Trainers</button></Link>
                <Link to='/workLoads'><button id="workL-button">WorkLoads</button></Link>
                <Link to='/workouts'><button id="workts-button">Workouts</button></Link>
                <Link to='/exercises'><button id="exerc-button">Exercises</button></Link>
                <Link to='/exerciseTypes'><button id="exerType-button">ExercisesTypes</button></Link>
            </ul>
        </div>
    )
}

export default ListBar;