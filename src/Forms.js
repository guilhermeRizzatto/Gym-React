import BackButton from './images/return.png';


function Forms() {
    return (
        <form>
            <input type="text" placeholder="Name" className="form-control rounded-0" id="name" />
            <input type="text" placeholder="CPF" className="form-control rounded-0" id="cpf" />
            <div class="d-grid gap-2 d-md-block">
                <button type="button" class="btn btn-success rounded-0">Post</button>
                <button type="button" class="btn btn-warning rounded-0">Update</button>
                <button type="button" class="btn btn-danger rounded-0">Delete</button>
                <button type="button" class="btn btn-outline-secondary rounded-0">Cancel</button>

            </div>
        </form >
    )
}

export default Forms;
