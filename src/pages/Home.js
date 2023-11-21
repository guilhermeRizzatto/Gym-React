function Home() {
    return (
        <div class="navbar">
            <nav>
                <form class="container-fluid justify-content-start">
                    <a href='http://localhost:3000/member'><button id="member-button" class="btn btn-outline-secondary" type="button">Gym Memberships</button></a>

                    <button id="registration-button" class="btn btn-outline-secondary" type="button">Registrations</button>

                    <button id="trainer-button" class="btn btn-outline-secondary" type="button">Trainers</button>

                    <button id="workLoad-button" class="btn btn-outline-secondary" type="button">WorkLoads</button>

                    <button id="workout-button" class="btn btn-outline-secondary" type="button">Workouts</button>

                    <button id="exercise-button" class="btn btn-outline-secondary" type="button">Exercises</button>

                    <button id="exerciseType-button" class="btn btn-outline-secondary" type="button">ExercisesTypes</button>

                    


                </form>
            </nav>
        </div>

    )
}


export default Home;

