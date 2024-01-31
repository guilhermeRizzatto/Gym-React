function WorkLoadForms({ button, teste, keyboard, typingDays, post, obj, cancel, update, keyboardInputId, inputTrainerId }) {
    return (
        <form>
            {
                inputTrainerId
                    ?
                    <div>
                        <input type="text" value={obj.entryTime} onChange={keyboard} name="entryTime" placeholder="Entry Time                                                                       ex: (11:00:00)" className="form-control rounded-0" id="entryTime" />
                        <input type="text" value={obj.departureTime} onChange={keyboard} name="departureTime" placeholder="Departure Time                                            (Hour:Minutes:Seconds)" className="form-control rounded-0" id="departureTime" />
                        <input type="text" value={obj.trainer.id} onChange={keyboardInputId} name="" placeholder="Trainer (Id)" className="form-control rounded-0" id="WorkLoadtrainerId" />
                        <input type="text" value={obj.days} onChange={typingDays} name="" placeholder="Days of Week     (MONDAY,SUNDAY) for example. All in CapsLock" className="form-control rounded-0" id="daysWorkLoad" />
                    </div>
                    :
                    <div>
                        <input type="text" value={obj.entryTime} onChange={keyboard} name="entryTime" placeholder="Entry Time                                                 (Hour-Minutes-Seconds)" className="form-control rounded-0" id="entryTime" />
                        <input type="text" value={obj.departureTime} onChange={keyboard} name="departureTime" placeholder="Departure Time                                         (Hour-Minutes-Seconds)" className="form-control rounded-0" id="departureTime" />
                        <input type="text" value={obj.days} onChange={typingDays} name="" placeholder="Days of Week (MONDAY,SUNDAY) for example. All in CapsLock" className="form-control rounded-0" id="daysWorkLoad" />
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
        </form>
    )
}

export default WorkLoadForms;