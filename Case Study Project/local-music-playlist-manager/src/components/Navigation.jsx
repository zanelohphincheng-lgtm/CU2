import { NavLink } from "react-router";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <NavLink className={({ isActive }) => (isActive ? "navbar-brand active" : "navbar-brand")} to="/">
                    LOGO?
                </NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/">
                                <i className="bi bi-house-door-fill icon-style"></i>
                                Search Bar |
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/addnote">
                                <i className="bi bi-plus icon-style"></i>
                                Filter |
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/categories">
                                <i className="bi bi-list-stars icon-style"></i>
                                Sort Dropdowns
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;