function Table({array, select}){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Registration Date</th>
                    <th>Monthly Period</th>
                    <th>Total Price (R$)</th>
                    <th>Installment</th>
                    <th>Valid</th>
                    <th>Installment Price (R$)</th>
                    <th>Gym Membership (ID)</th>
                    <th>Select</th>
                </tr>
            </thead>
            <tbody>
               {
                    array.map((obj, index) => (
                    <tr key={index}>
                        <td>{obj.id}</td>
                        <td>{obj.registrationDate}</td>
                        <td>{obj.monthlyPeriod}</td>
                        <td>{obj.price}</td>
                        <td>{obj.installment}</td>
                        <td>{obj.valid ? "True" : "False"}</td>
                        <td>{obj.installmentPrice}</td>
                        <td>{obj.gymMembership?.id}</td>
                        <td><button onClick={() => {select(index)}} className="btn btn-primary rounded-0">Select</button></td>
                    </tr>
                    ))
               }
            </tbody>

            
        </table>
    )
}

export default Table;