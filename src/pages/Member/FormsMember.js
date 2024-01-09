function Forms({button, keyboard, post, obj, input, cancel, remove, update}) {
    return (
        <form> 
            {
                input
                ?
                <div>
                    <input type="text" value={obj.name} onChange={keyboard} name="name" placeholder="Name" className="form-control rounded-0" id="name" />
                    <input type="text" value={obj.cpf} onChange={keyboard} name="cpf" placeholder="CPF" className="form-control rounded-0" id="cpf" />
                    <input type="text" value={obj.phone} onChange={keyboard} name="phone" placeholder="Phone" className="form-control rounded-0" id="phone" />
                    <input type="text" value={obj.age} onChange={keyboard} name="age" placeholder="Age" className="form-control rounded-0" id="age" />
                    <input type="text" value={obj.weight} onChange={keyboard} name="weight" placeholder="Weight      (kg)" className="form-control rounded-0" id="weight" />
                    <input type="text" value={obj.height} onChange={keyboard} name="height" placeholder="Height     (cm)" className="form-control rounded-0" id="height" />
                </div>
                :
                <div>
                    <input type="text" value={obj.name} onChange={keyboard} name="name" placeholder="Name" className="form-control rounded-0" id="name" />
                    <input type="text" value={obj.phone} onChange={keyboard} name="phone" placeholder="Phone" className="form-control rounded-0" id="phone" />
                    <input type="text" value={obj.age} onChange={keyboard} name="age" placeholder="Age" className="form-control rounded-0" id="age" />
                    <input type="text" value={obj.weight} onChange={keyboard} name="weight" placeholder="Weight      (kg)" className="form-control rounded-0" id="weight" />
                    <input type="text" value={obj.height} onChange={keyboard} name="height" placeholder="Height     (cm)" className="form-control rounded-0" id="height" />
                </div>
            }     
            {
                button
                ?
                <button type="button" onClick={post} className="btn btn-success rounded-0">Post</button>
                :
                <div class="d-grid gap-2 d-md-block">
                    <button id="updateButton" onClick={update} type="button" className="btn btn-warning rounded-0">Update</button>
                    <button type="button" onClick={remove} className="btn btn-danger rounded-0">Delete</button>
                    <button type="button" onClick={cancel} className="btn btn-outline-secondary rounded-0">Cancel</button>
                </div>
            }


        </form >
    )
}

export default Forms;
