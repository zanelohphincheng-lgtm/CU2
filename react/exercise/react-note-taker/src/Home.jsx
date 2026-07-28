const Home = () => {
    return (
        <div className="home-container">
            <h1>All Notes ()</h1>

            <div class="form-floating">
                <select class="form-select" id="categorySelect">
                    <option value="all" selected>
                        All Categories
                    </option>
                    <option value="personal">Personal</option>
                    <option value="work">Work</option>
                    <option value="ideas">Ideas</option>
                </select>
                <label for="categorySelect">Category</label>
            </div>

            <div class="form-floating">
                <select class="form-select" id="sortSelect">
                    <option value="updated" selected>Last Updated</option>
                    <option value="title">Title</option>
                </select>
                <label for="sortSelect">Sort By</label>
            </div>
            
            <div className="card-style">
                <button className="edit-button"><i className="bi bi-pencil text-primary">Edit</i></button>
                <button className="delete-button"><i className="bi bi-trash text-danger">Delete</i></button>
            </div>

            <div className="button-position">
                <button className="add-button">
                    <i className="bi bi-plus"></i>
                </button>
            </div>

        </div>
    );
};

export default Home