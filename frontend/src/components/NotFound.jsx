function NotFound() {
    return (
        <div className="container mb-3">
            <div className="row">
                <div className="col-md-6 col-sm-12" style={{ marginTop: "17rem", padding: "0 5rem" }}>
                    <h3>404</h3>
                    <h1 className="mt-2">
                        Kiaan couldn’t find that page
                    </h1>
                    <p className="fs-5 mt-3">
                        We couldn’t find the page you were looking for. Visit <a href="/" className="text-decoration-none">Zerodha’s home page</a>
                    </p>
                </div>
                <div className="col-md-6 p-4">
                    <img src="media/images/notFound404.jpg" className="w-75 d-md-flex d-none" style={{ marginTop: "4.75rem" }} />
                </div>
            </div>
        </div>
    );
}

export default NotFound;