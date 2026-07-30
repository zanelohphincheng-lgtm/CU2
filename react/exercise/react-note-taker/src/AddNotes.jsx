import { Link } from "react-router"

const AddNotes = () => {
    return(
        <div className="container">
            <h1>Add Notes</h1>
            <form action="">
                <input type="text" placeholder="Title" className="form-control my-3"/>

                <div class="form-floating my-3">
                    <select className="form-select" id="categorySelect">
                        <option value="personal">Personal</option>
                        <option value="work">Work</option>
                        <option value="ideas">Ideas</option>
                    </select>
                    <label for="categorySelect">Category</label>
                </div>
                <textarea name="" id="" className="form-control" rows={5} placeholder="Content"></textarea>
                <div className="button-position">
                    <Link to={""}><button className="btn blue-button">Add Note</button></Link>
                    <Link to={"/"}><button className="btn white-button">Cancel</button></Link>
                </div> 
            </form>
        </div>
    )
}

export default AddNotes