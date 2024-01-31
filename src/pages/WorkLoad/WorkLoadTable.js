function Table({array, select}){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Entry Time</th>
                    <th>Departure Time</th>
                    <th>Trainer (ID)</th>
                    <th id="thWorkLoadTrainerName">Trainer (Name)</th>
                    <th>Days</th>
                    <th>Select</th>
                </tr>
            </thead>
            <tbody>
               {
                    array.map((obj, index) => (
                    <tr key={index}>
                        <td>{obj.id}</td>
                        <td>{obj.entryTime}</td>
                        <td>{obj.departureTime}</td>
                        <td>{obj.trainer.id}</td>
                        <td>{obj.trainer.name}</td>
                        <td>{obj.days.join(", ")}</td>
                        <td><button onClick={() => {select(index)}} className="btn btn-primary rounded-0">Select</button></td>
                    </tr>
                    ))
               }
            </tbody>

            
        </table>
    )
}

export default Table;