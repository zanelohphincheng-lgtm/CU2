import ExportImportPanel from "./ExportImportPanel";

const ControlBar = () => {
    return (
        <div className="card-styling">
            <h5 className="card-title">Controls</h5>

            <div className="d-flex align-items-center gap-4 mb-4">
                {/*  Sort Box with Legend Border */}
                <fieldset className="sort-fieldset">
                    <legend>Sort</legend>
                    <select className="form-select form-select-sm border-0 p-0">
                        <option selected>Created (newest first)</option>
                        <option value="1">Created (oldest first)</option>
                        <option value="2">Title (A-Z)</option>
                        <option value="3">Rating (Highest)</option>
                    </select>
                </fieldset>
            </div>

            {/* Watched Radio Controls */}
            <div className="watched-group-label">Watched</div>
            <div className="d-flex gap-3 align-items-center mb-3">
                <div className="form-check m-0">
                    <input className="form-check-input" type="radio" name="watchedFilter" id="all" defaultChecked />
                    <label className="form-check-label small" htmlFor="all">
                        All
                    </label>
                </div>
                <div className="form-check m-0">
                    <input className="form-check-input" type="radio" name="watchedFilter" id="watched" />
                    <label className="form-check-label small" htmlFor="watched">
                        Watched
                    </label>
                </div>
                <div className="form-check m-0">
                    <input className="form-check-input" type="radio" name="watchedFilter" id="unwatched" />
                    <label className="form-check-label small" htmlFor="unwatched">
                        Unwatched
                    </label>
                </div>
            </div>
            <div className="mb-4" style={{ maxWidth: "260px" }}>
                <label className="form-label small text-muted mb-2">Minimum Rating: All</label>
                <input type="range" className="form-range" min="0" max="5" step="1" id="minRating" />
            </div>
            <ExportImportPanel />
        </div>
    );
};

export default ControlBar;
