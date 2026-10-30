const TicketCard = ({ titleWithIcon, options }) => {
  return (
    <div className="col-md-4 ticketCard p-3">
      <h6 className="mt-2 mb-3 cardTitle">
        <a href="#">{titleWithIcon}</a>
      </h6>
      <div className="ms-4 cardOptions">{options}</div>
    </div>
  );
};

function CreateTicket() {
  return (
    <div className="row py-4 px-2 mb-3 ticketSection">
      <h5 className="mainHeading">
        To create a ticket, select a relevant topic
      </h5>
      <TicketCard
        titleWithIcon={
          <>
            <svg
              className="me-1 mb-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={18}
              height={18}
              color={"#000"}
              fill={"none"}
            >
              <path
                d="M12 8V16M16 12H8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>{" "}
            Account Opening
          </>
        }
        options={
          <>
            <a href="#">Getting started</a>
            <a href="#">Online</a>
            <a href="#">Offline</a>
            <a href="#">Charges</a>
            <a href="#">Company, Partnership and HUF</a>
            <a href="#">Non Resident Indian (NRI)</a>
          </>
        }
      />
      <TicketCard
        titleWithIcon={
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={21}
              height={21}
              color={"#000000"}
              fill={"none"}
            >
              <path
                d="M18.5 20V17.9704C18.5 16.7281 17.9407 15.5099 16.8103 14.9946C15.4315 14.3661 13.7779 14 12 14C10.2221 14 8.5685 14.3661 7.18968 14.9946C6.05927 15.5099 5.5 16.7281 5.5 17.9704V20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="7.5"
                r="3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>{" "}
            Your Zerodha Account
          </>
        }
        options={
          <>
            <a href="#">Login credentials</a>
            <a href="#">Your Profile</a>
            <a href="#">Account modification and segment addition</a>
            <a href="#">CMR & DP ID</a>
            <a href="#">Nomination</a>
            <a href="#">Transfer and conversion of shares</a>
          </>
        }
      />
      <TicketCard
        titleWithIcon={
          <>
            <svg
              className="me-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="6 6 12 12"
              width={13}
              height={13}
              color={"#000000"}
              fill={"none"}
            >
              <path
                d="M7 17L7 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M12 17L12 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M17 17L17 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>{" "}
            Trading and Markets
          </>
        }
        options={
          <>
            <a href="#">Trading FAQs</a>
            <a href="#">Kite</a>
            <a href="#">Margins</a>
            <a href="#">Product and order types</a>
            <a href="#">Corporate actions</a>
            <a href="#">Kite features</a>
          </>
        }
      />
      <TicketCard
        titleWithIcon={
          <>
            <img className="me-1 mb-2" src="/media/images/fundsIcon.png" />{" "}
            Funds
          </>
        }
        options={
          <>
            <a href="#">Fund withdrawal</a>
            <a href="#">Adding funds</a>
            <a href="#">Adding bank accounts</a>
            <a href="#">eMandates</a>
          </>
        }
      />
      <TicketCard
        titleWithIcon={
          <>
            <img className="me-1 mb-1" src="/media/images/consoleIcon.png" />{" "}
            Console
          </>
        }
        options={
          <>
            <a href="#">IPO</a>
            <a href="#">Portfolio</a>
            <a href="#">Funds statement</a>
            <a href="#">Profile</a>
            <a href="#">Reports</a>
            <a href="#">Referral program</a>
          </>
        }
      />
      <TicketCard
        titleWithIcon={
          <>
            <img className="mb-1" src="/media/images/coinIcon.png" /> Coin
          </>
        }
        options={
          <>
            <a href="#">Understanding mutual funds and Coin</a>
            <a href="#">Coin app</a>
            <a href="#">Coin web</a>
            <a href="#">Transactions and reports</a>
            <a href="#">National Pension Scheme (NPS)</a>
          </>
        }
      />
    </div>
  );
}

export default CreateTicket;
