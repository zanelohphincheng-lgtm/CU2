import StarRating from "./StarRating";
const MovieCard = ({ movie }) => {
  // Static placeholder data if no movie prop is passed yet
  const title = movie?.title || "How To Train Your Dragon";
  const rating = movie?.rating || 5;
  const isWatched = movie?.isWatched || false;

    return (
        <div className="card-styling d-flex align-items-center justify-content-between py-3">
            {/* Left: Checkbox + Title + Timestamp */}
            <div className="d-flex align-items-start gap-3">
                <input className="form-check-input movie-checkbox mt-1" type="checkbox" />
                <div>
                    <div className="fw-medium text-dark">{title}</div>
                    <div className="timestamp-text">Updated: just now</div>
                </div>
            </div>

            {/* Right: Stars + Add Review Dropdown */}
            <div className="d-flex align-items-center gap-3">
                <StarRating rating={rating} />
                <button className="btn btn-outline-custom dropdown-toggle">ADD REVIEW</button>
            </div>
        </div>
    );
};

export default MovieCard;
