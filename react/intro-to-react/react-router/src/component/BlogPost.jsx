import { useParams, Link, Outlet, useNavigate } from "react-router";

const BlogPost = () => {
    let { id } = useParams();
    let navigate = useNavigate();

    const goBack = () => {
        navigate("/blog")
    }

    return (
        <div>
            <h1 className="text-dark">Blog Post {id}</h1>
            <p>This is the content for blog post {id}.</p>
            <Link to={`/blog/${id}/comments`}>View Comments</Link>
            <Outlet />
            <button onClick={goBack} className="btn btn-primary mt-3">
                Back To Blog
            </button>
            {/* Outlet lets you render files that are related to this file which is Comments.jsx */}
            {/* Rendering the Comments.jsx in the same BlogPost page */}
            {/* In other words making it a nested component in the App.jsx */}
        </div>
    );
};

export default BlogPost;
