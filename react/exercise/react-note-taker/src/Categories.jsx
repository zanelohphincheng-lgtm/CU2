import { Link } from "react-router";
import category from "./Data/CategoryData";

const Categories = () => {
    return (
        <div className="container">
            <h1>Manage Categories</h1>

            <div className="category-card my-3">
                <h3 className="">Add New Category</h3>
                <input type="text" placeholder="Category Name" className="form-control" />
                <button className="btn blue-button">Add</button>
            </div>

            <div className="category-card">
                <h3>Existing Categories({category.length})</h3>
                <ul className="category-list">
                    {category.map((categories) => (
                        <li className="listed-category">
                            {categories.label}
                            <Link to={`/c/${categories.id}`}>
                                <button className="category-button">
                                    <i className="bi bi-pencil"></i>
                                </button>
                            </Link>

                            <button className="category-button">
                                <i className="bi bi-trash"></i>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Categories;
