import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary border-bottom sticky-top navbarNav">
            <div className="container px-4 d-flex justify-content-between align-items-center">
                <div><Link to="/" className="navbar-brand">
                    <img src="/media/images/logo.svg" className="navbarLogo" alt="Logo Image" />
                </Link></div>
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link active" aria-current="page">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link active" aria-current="page">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link active" aria-current="page">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pricing" className="nav-link active" aria-current="page">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/support" className="nav-link active" aria-current="page">Support</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="navbar-toggler-icon d-md-flex d-none"></span>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;