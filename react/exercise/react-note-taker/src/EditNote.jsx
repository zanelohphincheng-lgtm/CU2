import { Link } from "react-router";
import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import notes from "./Data/NotesData";

const EditNote = () => {
    const { id } = useParams();
    const selectedNote = notes.find((note) => note.id === Number(id));

    const navigate = useNavigate();

    const [title, setTitle] = useState(selectedNote ? selectedNote.title : "");
    const [category, setCategory] = useState(selectedNote ? selectedNote.category : "");
    const [content, setContent] = useState(selectedNote ? selectedNote.content : "");

    const handleSave = (e) => {
        e.preventDefault();
        // TODO: Save logic goes here
        navigate("/"); // Redirect back to Home Page
    };

    if (!selectedNote) {
        return <h2 className="d-flex justify-content-center">Note not found!</h2>;
    }

    return (
        <div className="container">
            <h1>Edit Note</h1>
            <form onSubmit={handleSave}>
                <label>Title :</label>
                <input type="text" className="form-control my-3" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />

                <div class="form-floating my-3">
                    <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option>Personal</option>
                        <option>Work</option>
                        <option>Ideas</option>
                    </select>
                    <label for="categorySelect">Category</label>
                </div>
                <textarea name="" id="" className="form-control" rows={6} placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <div className="button-position">
                    <div>
                        <button type="submit" className="btn blue-button">
                            Save Change
                        </button>
                    </div>

                    <Link to={"/"}>
                        <button className="btn white-button">Cancel</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default EditNote;
