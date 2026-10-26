import "./About.css";

function Team() {
  return (
    <section className="team-section">

      <div className="container">

        <div className="text-center mb-5">

          <h2 className="section-title">
            People
          </h2>

        </div>

        <div className="row align-items-center gy-5">

          <div className="col-lg-4 text-center">

            <img
              src="/images/nithinKamath.jpg"
              alt="Nithin Kamath"
              className="team-image"
              loading="lazy"
            />

            <h4 className="mt-4">
              Nithin Kamath
            </h4>

            <p className="text-muted">
              Founder & CEO
            </p>

          </div>

          <div className="col-lg-8">

            <p>
              Nithin founded Zerodha in 2010 after spending nearly a decade as
              a trader. His vision was to remove barriers and make investing
              affordable for everyone.
            </p>

            <p>
              Today, Zerodha has transformed India's broking industry through
              technology, transparency, and customer-centric products.
            </p>

            <p>
              Outside work, he enjoys basketball and actively supports India's
              startup ecosystem through Rainmatter.
            </p>

            <div className="d-flex flex-wrap gap-4 mt-4">

              <a href="#" className="section-link">
                Homepage
              </a>

              <a href="#" className="section-link">
                TradingQ&A
              </a>

              <a href="#" className="section-link">
                Twitter
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Team;