const ChargesSection = ({ title, description }) => {
  return (
    <div className="chargesSection">
      <p>{title}</p>
      <div className="description pb-1" style={{ margin: "1rem 0" }}>
        {description}
      </div>
    </div>
  );
};

function Charges() {
  return (
    <>
      <div className="row px-2">
        <h4>Charges explained</h4>
        <div className="col-md-6 mt-3 pt-3 pb-2 ps-2 pe-3">
          <ChargesSection
            title="Securities/Commodities transaction tax"
            description={
              <>
                <p>
                  Tax by the government when transacting on the exchanges.
                  Charged as above on both buy and sell sides when trading
                  equity delivery. Charged only on selling side when trading
                  intraday or on F&O.
                </p>
                <p className="mb-0">
                  When trading at Zerodha, STT/CTT can be a lot more than the
                  brokerage we charge. Important to keep a tab.
                </p>
              </>
            }
          />
          <ChargesSection
            title="Transaction/Turnover Charges"
            description={
              <>
                <p>
                  Charged by exchanges (NSE, BSE, MCX) on the value of your
                  transactions.
                </p>
                <p>
                  BSE has revised transaction charges in XC, XD, XT, Z and ZP
                  groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD
                  groups have been merged into a new group X w.e.f 01.12.2017)
                </p>
                <p>
                  BSE has revised transaction charges in SS and ST groups to
                  ₹1,00,000 per crore of gross turnover.
                </p>
                <p>
                  BSE has revised transaction charges for group A, B and other
                  non exclusive scrips (non-exclusive scrips from group E, F,
                  FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate
                  basis w.e.f. December 1, 2022.
                </p>
                <p className="mb-0">
                  BSE has revised transaction charges in M, MT, TS and MS groups
                  to ₹275 per crore of gross turnover.
                </p>
              </>
            }
          />
          <ChargesSection
            title="Call & trade"
            description="Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders."
          />
          <ChargesSection
            title="Stamp charges"
            description="Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories."
          />
          <ChargesSection
            title="NRI brokerage charges"
            description={
              <ul className="mb-0">
                <li>₹100 per order for futures and options.</li>
                <li>
                  For a non-PIS account, 0.5% or ₹100 per executed order for
                  equity (whichever is lower).
                </li>
                <li>
                  For a PIS account, 0.5% or ₹200 per executed order for equity
                  (whichever is lower).
                </li>
                <li>
                  ₹500 + GST as yearly account maintenance charges (AMC)
                  charges.
                </li>
              </ul>
            }
          />
          <ChargesSection
            title="Account with debit balance"
            description="If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order."
          />
          <ChargesSection
            title="Charges for Investor's Protection Fund Trust (IPFT) by NSE"
            description={
              <ul style={{ marginBottom: "-0.5rem" }}>
                <li>
                  Equity and Futures - ₹10 per crore + GST of the traded value.
                </li>
                <li>
                  Options - ₹50 per crore + GST traded value (premium value).
                </li>
                <li>
                  Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                  per lakh + GST of premium for Options.
                </li>
              </ul>
            }
          />
          <ChargesSection
            title="Margin Trading Facility (MTF)"
            description={
              <ul className="mb-0">
                <li>
                  MTF Interest: 0.04% per day (₹40 per lakh) on the funded
                  amount. The interest is applied from T+1 day until the day MTF
                  stocks are sold.
                </li>
                <li>
                  MTF Brokerage: 0.03% or Rs. 20/executed order, whichever is
                  lower.
                </li>
                <li>
                  MTF pledge charge: ₹30 + GST per pledge request per ISIN.
                </li>
              </ul>
            }
          />
        </div>
        <div className="col-md-6 mt-3 pt-3 pb-2 ps-3 pe-2">
          <ChargesSection
            title="GST"
            description="Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)"
          />
          <ChargesSection
            title="SEBI Charges"
            description="Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets."
          />
          <ChargesSection
            title="DP (Depository participant) charges"
            description={
              <>
                <p>
                  ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34
                  GST) is charged on the trading account ledger when stocks are
                  sold, irrespective of quantity.
                </p>
                <p>
                  Female demat account holders (as first holder) will enjoy a
                  discount of ₹0.25 per transaction on the CDSL fee.
                </p>
                <p className="mb-0">
                  Debit transactions of mutual funds & bonds get an additional
                  discount of ₹0.25 on the CDSL fee.
                </p>
              </>
            }
          />
          <ChargesSection
            title="Pledging charges"
            description="₹30 + GST per pledge request per ISIN."
          />
          <ChargesSection
            title="AMC (Account maintenance charges)"
            description={
              <>
                <p>
                  For BSDA demat account: Zero charges if the holding value is
                  less than ₹4,00,000. To learn more about BSDA,{" "}
                  <a href="#">Click here</a>
                </p>
                <p className="mb-0">
                  For non-BSDA demat accounts: ₹300/year + 18% GST charged
                  quarterly (90 days). To learn more about AMC,{" "}
                  <a href="#">Click here</a>
                </p>
              </>
            }
          />
          <ChargesSection
            title="Corporate action order charges"
            description="₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console."
          />
          <ChargesSection
            title="Off-market transfer charges"
            description="₹25 per transaction."
          />
          <ChargesSection
            title="Physical CMR request"
            description="First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests."
          />
          <ChargesSection
            title="Payment gateway charges"
            description="₹9 + GST (Not levied on transfers done via UPI)"
          />
          <ChargesSection
            title="Delayed Payment Charges"
            description={
              <>
                Interest is levied at 18% a year or 0.05% per day on the debit
                balance in your trading account.
                <a href="#"> Learn more.</a>
              </>
            }
          />
        </div>
        <ChargesSection
          title="Disclaimer"
          description="For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged."
        />
      </div>
      <div className="row p-2 chargesTable" style={{ marginTop: "4.75rem" }}>
        <h4>Charges for account opening</h4>
        <table>
          <thead>
            <tr>
              <th>Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online account</td>
              <td>
                <span className="freeTag">free</span>
              </td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td>
                <span className="freeTag">free</span>
              </td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className="row p-2 chargesTable"
        style={{ marginTop: "4.75rem", marginBottom: "5rem" }}
      >
        <h4>Charges for optional value added services</h4>
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Billing Frquency</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tickertape</td>
              <td>Monthly / Annual</td>
              <td>Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr>
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect: 2000 | Historical: 2000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Charges;
