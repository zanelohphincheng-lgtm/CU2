import { Link } from "react-router";
import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import category from "./Data/CategoryData";

const EditCategory = () => {
    const { id } = useParams();
    const selectedCategory = category.find((categories) => categories.id === Number(id));

    const navigate = useNavigate();

    const [label, setLabel] = useState(selectedCategory ? selectedCategory.label : "");

    const handleSave = (e) => {
        e.preventDefault();
        // TODO: Save logic goes here
        navigate("/"); // Redirect back to Home Page
    };

    if (!selectedCategory) {
        return <h2 className="d-flex justify-content-center">Category not found!</h2>;
    }

    return (
        <div className="container">
            <h1>Edit Category</h1>
            <form onSubmit={handleSave}>
                <input type="text" className="form-control my-3" placeholder="Category Name" value={label} onChange={(e) => setLabel(e.target.value)} />

                <div className="button-position">
                    <div>
                        <button type="submit" className="btn blue-button">
                            Save Change
                        </button>
                    </div>

                    <Link to={"/categories"}>
                        <button className="btn white-button">Cancel</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default EditCategory;
