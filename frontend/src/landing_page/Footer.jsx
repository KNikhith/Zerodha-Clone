import "./Footer.css";

const footerSections = [
  {
    title: "Company",
    links: [
      "About",
      "Philosophy",
      "Press & Media",
      "Careers",
      "Zerodha Cares (CSR)",
      "Zerodha.tech",
      "Open Source",
    ],
  },
  {
    title: "Support",
    links: [
      "Contact Us",
      "Support Portal",
      "How to file a complaint?",
      "Status of your complaints",
      "Bulletin",
      "Circular",
      "Z-Connect Blog",
      "Downloads",
    ],
  },
  {
    title: "Account",
    links: [
      "Open Demat Account",
      "Minor Demat Account",
      "NRI Demat Account",
      "Commodity",
      "Dematerialisation",
      "Fund Transfer",
      "MTF",
      "Referral Program",
    ],
  },
];

const bottomLinks = [
  "NSE",
  "BSE",
  "MCX",
  "Terms & Conditions",
  "Policies & Procedures",
  "Privacy Policy",
  "Disclosure",
  "Investor Charter",
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container border-top pt-5">

        <div className="row gy-4">

          <div className="col-lg-3">
            <img
              src="/images/logo.svg"
              alt="Zerodha Logo"
              className="footer-logo"
            />

            <p className="footer-copy">
              © 2010–2025 Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
          </div>

          {footerSections.map((section) => (
            <div className="col-lg-3 col-md-4" key={section.title}>
              <h6>{section.title}</h6>

              <ul className="list-unstyled">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-disclaimer mt-5">

          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            No.: INZ000031633. Depository services through CDSL/NSDL.
          </p>

          <p>
            Investments in securities market are subject to market risks. Read
            all related documents carefully before investing.
          </p>

          <p>
            Update your email and mobile number with your broker to receive
            transaction alerts directly from the exchange.
          </p>

        </div>

        <div className="footer-bottom">

          {bottomLinks.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}

        </div>

      </div>
    </footer>
  );
}

export default Footer;