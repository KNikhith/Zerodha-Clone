import "./Support.css";

const sections = [
  {
    title: "Account Opening",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company & Partnership Accounts",
      "NRI Account Opening",
      "Charges at Zerodha",
      "Getting Started",
    ],
  },
  {
    title: "Your Zerodha Account",
    links: [
      "Your Profile",
      "Account Modification",
      "Client Master Report",
      "Nomination",
      "Transfer of Securities",
    ],
  },
  {
    title: "Funds",
    links: [
      "Add Money",
      "Withdraw Money",
      "Add Bank Accounts",
      "eMandates",
    ],
  },
];

function CreateTicket() {
  return (
    <section className="ticket-section">

      <div className="container">

        <h2 className="mb-5">
          Create a Ticket
        </h2>

        <div className="row">

          {sections.map((section) => (

            <div
              className="col-lg-4"
              key={section.title}
            >
              <div className="ticket-card">

                <h4>

                  <i className="fa-solid fa-circle-plus me-2"></i>

                  {section.title}

                </h4>

                {section.links.map((item) => (
                  <a href="#" key={item}>
                    {item}
                  </a>
                ))}

              </div>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default CreateTicket;