const TeamMember = ({ imgSrc, name, role }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-5 pb-3">
      <img src={imgSrc} />
      <h3 className="fs-5 mt-3">{name}</h3>
      <p className="text-muted">{role}</p>
    </div>
  );
};

function Team() {
  return (
    <>
      <div className="row">
        <h2 className="text-center">People</h2>
      </div>
      <div className="row my-5 pb-5">
        <div className="col-md-6 text-center team-photoSection">
          <img
            src="/media/images/peoples/Altamash.png"
            alt="Software Developer Image"
          />
          <h3 className="fs-5 mt-3">Altamash Siddiqui</h3>
          <p className="text-muted">Software Developer</p>
        </div>
        <div className="col-md-6 mt-3 team-rightParasSection">
          <p>
            Altamash developed and created this Zerodha clone project to address
            the challenges he faced while learning and honing his web
            development skills.Through this project, he aimed to push his
            boundaries, improve his coding expertise, and replicate the
            functionality and design of a complex, real - world platform.
          </p>
          <p>
            He is continuously expanding his knowledge in modern web
            technologies and aspires to contribute to the tech community through
            innovative projects and collaboration.
          </p>
          <p>Solving programming challenges is his passion.</p>
          <p>
            Connect on
            <a
              href="https://www.instagram.com/altamash.siddiquiii/"
              target="_blank"
            >
              {" "}
              Instagram
            </a>{" "}
            /
            <a
              href="https://www.linkedin.com/in/altamash-siddiquiii/"
              target="_blank"
            >
              {" "}
              Linkedin
            </a>{" "}
            /
            <a href="https://x.com/Altamash90/" target="_blank">
              {" "}
              Twitter
            </a>
          </p>
        </div>
      </div>
      <hr />
      <div className="row my-5 py-5">
        <div className="col-md-6 text-center team-photoSection">
          <img
            src="/media/images/peoples/Nithin.jpg"
            alt="Founder, CEO Image"
          />
          <h3 className="fs-5 mt-3">Nithin Kamath</h3>
          <p className="text-muted">Founder, CEO</p>
        </div>
        <div className="col-md-6 mt-3 team-rightParasSection">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on
            <a href="https://nithinkamath.me/" target="_blank">
              {" "}
              Homepage
            </a>{" "}
            /
            <a href="https://tradingqna.com/u/nithin/summary" target="_blank">
              {" "}
              TradingQnA
            </a>{" "}
            /
            <a href="https://x.com/Nithin0dha" target="_blank">
              {" "}
              Twitter
            </a>
          </p>
        </div>
      </div>
      <div className="row text-center my-5 py-5 team-allPeople">
        <TeamMember
          imgSrc="/media/images/peoples/Nikhil.jpg"
          name="Nikhil Kamath"
          role="Co-founder & CEO"
        />
        <TeamMember
          imgSrc="/media/images/peoples/Kailash.jpg"
          name="Dr. Kailash Nadh"
          role="CTO"
        />
        <TeamMember
          imgSrc="/media/images/peoples/Venu.jpg"
          name="Venu Madhav"
          role="COO"
        />
        <TeamMember
          imgSrc="/media/images/peoples/Hanan.jpg"
          name="Hanan Delvi"
          role="CCO"
        />
        <TeamMember
          imgSrc="/media/images/peoples/Seema.jpg"
          name="Seema Patil"
          role="Director"
        />
        <TeamMember
          imgSrc="/media/images/peoples/Karthik.jpg"
          name="Karthik Rangappa"
          role="Chief of Education"
        />
        <TeamMember
          imgSrc="/media/images/peoples/Austin.jpg"
          name="Austin Prakesh"
          role="Director Strategy"
        />
      </div>
    </>
  );
}

export default Team;
