function HeroSection() {
  return (
    <>
      <div className="supportWrapper">
        <h5>Support Portal</h5>
        <a href="#">Track tickets</a>
      </div>
      <div className="row sWrapperBottom">
        <div className="col-md-7 left">
          <h5>Search for an answer or browse help topics to create a ticket</h5>
          <div className="d-flex">
            <input
              type="text"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
            />
            <span className="searchIcon">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <div className="links mt-2">
            <a href="#">Track account opening</a>
            <br className="d-md-none" />
            <a href="#">Track segment activation</a>
            <br className="d-md-none" />
            <a href="#">Intraday margins</a>
            <br />
            <a href="#">Kite user manual</a>
          </div>
        </div>
        <div className="col-md-5 right">
          <h5>Featured</h5>
          <ol className="mx-2 my-3">
            <li className="mb-4">
              <a href="#">Surveillance measure on scrips - December 2024</a>
            </li>
            <li>
              <a href="#">Latest Intraday leverages and Square-off timings</a>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
