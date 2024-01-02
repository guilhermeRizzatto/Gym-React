function Table({array, select}){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Age</th>
                    <th>Weight</th>
                    <th>Height</th>
                    <th>Select</th>
                </tr>
            </thead>

            <tbody>
               {
                    array.map((obj, index) => (
                    <tr key={index}>
                        <td>{obj.id}</td>
                        <td>{obj.name}</td>
                        <td>{obj.phone}</td>
                        <td>{obj.age}</td>
                        <td>{obj.weight}</td>
                        <td>{obj.height}</td>
                        <td><button onClick={() => {select(index)}} className="btn btn-primary rounded-0">Select</button></td>
                    </tr>
                    ))
               }
            </tbody>
        </table>
    )
}

export default Table;