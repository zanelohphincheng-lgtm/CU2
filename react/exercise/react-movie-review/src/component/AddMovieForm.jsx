import StarRating from "./StarRating"

const AddMovieForm = () => {
    return(
        <div className="card-styling">
            <div className="card-title">Add Movie</div>
            <div className="row g-3 align-items-center">
                {/* Title Input */}
                <div className="col">
                    <input type="text" className="form-control" placeholder="Title *" style={{backgroundColor: "#fcfcfc"}} />
                </div>
                {/* Optional Rating */}
                <div className="col-auto text-center px-2">
                    <div className="text-muted" style={{fontSize: "0.75rem", marginBottom: "2px"}}>
                        Initial Rating (optional)
                    </div>
                    <StarRating rating={0} interactive={true} />
                </div>
                {/* Add Button */}
                <div className="col-auto">
                    <button className="btn btn-primary-custom px-4">ADD</button>
                </div>
            </div>
        </div>
    )
}

export default AddMovieForm