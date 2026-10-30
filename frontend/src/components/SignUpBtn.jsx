import { Link } from "react-router-dom";

function SignUpBtn() {
    return (
        <Link to="/signup" className="btn btn-primary w-auto mx-auto px-4 py-2 fs-5 fw-semibold">
            Sign up for free
        </Link>
    );
}

export default SignUpBtn;