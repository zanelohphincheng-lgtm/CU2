import { Link } from "react-router";
import notes from "./Data/NotesData";
import category from "./Data/CategoryData";

const Home = () => {
    return (
        <div className="container">
            <h1>All Notes ({notes.length})</h1>

            <div className="form-floating my-3">
                <select className="form-select" id="categorySelect">
                    <option value="all" selected>
                        All Categories
                    </option>
                    {category.map((categories) => (
                        <option>{categories.label}</option>
                    ))}
                </select>
                <label htmlFor="categorySelect">Category</label>
            </div>

            <div className="form-floating">
                <select className="form-select" id="sortSelect">
                    <option value="updated" selected>
                        Last Updated
                    </option>
                    <option value="title">Title</option>
                </select>
                <label htmlFor="sortSelect">Sort By</label>
            </div>

            {/* Note List Placeholder */}
            {notes.map((note) => (
                <div className="my-3">
                    <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
                        <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "5px" }}>
                            <h3>{note.title}</h3>
                            <p id="category-badge">{note.category}</p>
                            <p className="text-muted">{note.time}</p>
                            <Link to={`/n/${note.id}`}>
                                <button className="edit-button">
                                    <i className="bi bi-pencil text-primary">Edit</i>
                                </button>
                            </Link>
                            <button className="delete-button">
                                <i className="bi bi-trash text-danger">Delete</i>
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            <div className="button-position">
                <Link to={"/addnote"}>
                    <button className="add-button">
                        <i className="bi bi-plus"></i>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
