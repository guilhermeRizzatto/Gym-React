function Forms({button, keyboard, post, obj, cancel, update, keyboardInputId, inputGymMemberId}) {
    return (
        <form>
            {
                inputGymMemberId
                ?
                <div>
                    <input type="text" value={obj.registrationDate} onChange={keyboard} name="registrationDate" placeholder="Registration Date                                                   (Year-Month-Day)" className="form-control rounded-0" id="registrationDate" />
                    <input type="text" value={obj.monthlyPeriod} onChange={keyboard} name="monthlyPeriod" placeholder="Monthly Period" className="form-control rounded-0" id="monthlyPeriod" />
                    <input type="text" value={obj.price} onChange={keyboard} name="price" placeholder="Price                                                                                                (R$)" className="form-control rounded-0" id="price" />
                    <input type="text" value={obj.installment} onChange={keyboard} name="installment" placeholder="Installment" className="form-control rounded-0" id="installment" />
                    <input type="number" value={obj.gymMembership.id} onChange={keyboardInputId} name="" placeholder="Gym Membership (Id)" className="form-control rounded-0" id="gymMembershipId" />
                </div>
                :
                <div>
                    <input type="text" value={obj.registrationDate} onChange={keyboard} name="registrationDate" placeholder="Registration Date                                                   (Year-Month-Day)" className="form-control rounded-0" id="registrationDate" />
                    <input type="text" value={obj.monthlyPeriod} onChange={keyboard} name="monthlyPeriod" placeholder="Monthly Period" className="form-control rounded-0" id="monthlyPeriod" />
                    <input type="text" value={obj.price} onChange={keyboard} name="price" placeholder="Price                                                                                                (R$)" className="form-control rounded-0" id="price" />
                    <input type="text" value={obj.installment} onChange={keyboard} name="installment" placeholder="Installment" className="form-control rounded-0" id="installment" />
                </div>
            }      
            {
                button
                ?
                <button type="button" onClick={post} className="btn btn-success rounded-0">Post</button>
                :
                <div class="d-grid gap-2 d-md-block">
                    <button id="updateButton" onClick={update} type="button" className="btn btn-warning rounded-0">Update</button>
                    <button type="button" onClick={cancel} className="btn btn-outline-secondary rounded-0">Cancel</button>
                </div>
            }


        </form >
    )
}

export default Forms;
