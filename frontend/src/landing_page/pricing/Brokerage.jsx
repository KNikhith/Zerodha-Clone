import Content from "./Content";

function Brokerage() {
  return (
    <div className="container">
      <div className="row g-5">
        <h1
          className="fs-3 p-3 mt-5 d-block"
          style={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: 500,
            marginLeft: "1.25rem",
            marginBottom: "0.5rem",
          }}
        >
          Charges explained
        </h1>
        <div className="col p-3">
          <Content
            heading="Securities/Commodities transaction tax"
            context={
              <>
                Tax by the government when transacting on the exchanges. Charged
                as above on both buy and sell sides when trading equity
                delivery. Charged only on selling side when trading intraday or
                on F&O.
                <br />
                <br />
                When trading at Zerodha, STT/CTT can be a lot more than the
                brokerage we charge. Important to keep a tab.
              </>
            }
          />
          <Content
            heading="Transaction/Turnover Charges"
            context={
              <>
                Charged by exchanges (NSE, BSE, MCX) on the value of your
                transactions.
                <br />
                <br />
                BSE has revised transaction charges in XC, XD, XT, Z and ZP
                groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups
                have been merged into a new group X w.e.f 01.12.2017).
                <br />
                <br />
                BSE has revised transaction charges in SS and ST groups to
                ₹1,00,000 per crore of gross turnover.
                <br />
                <br />
                BSE has revised transaction charges for group A, B and other non
                exclusive scrips (non-exclusive scrips from group E, F, FC, G,
                GC, W, T) at ₹375 per crore of turnover on flat rate basis
                w.e.f. December 1, 2022.
                <br />
                <br />
                BSE has revised transaction charges in M, MT, TS and MS groups
                to ₹275 per crore of gross turnover.
                <br />
              </>
            }
          />
          <Content
            heading="Call & trade"
            context={
              <>
                Additional charges of ₹50 per order for orders placed through a
                dealer at Zerodha including auto square off orders.
              </>
            }
          />
          <Content
            heading="Stamp charges"
            context={
              <>
                Stamp charges by the Government of India as per the Indian Stamp
                Act of 1899 for transacting in instruments on the stock
                exchanges and depositories.
              </>
            }
          />
          <Content
            heading="NRI brokerage charges"
            context={
              <>
                <ul>
                  <li>₹100 per order for futures and options.</li>
                  <li>
                    For a non-PIS account, 0.5% or ₹100 per executed order for
                    equity (whichever is lower).
                  </li>
                  <li>
                    For a PIS account, 0.5% or ₹200 per executed order for
                    equity (whichever is lower).
                  </li>
                  <li>
                    ₹500 + GST as yearly account maintenance charges (AMC)
                    charges.
                  </li>
                </ul>
              </>
            }
          />
          <Content
            heading="Account with debit balance"
            context={
              <>
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </>
            }
          />
          <Content
            heading="Margin Trading Facility (MTF)"
            context={
              <>
                <ul>
                  <li>
                    MTF Interest: 0.04% per day (₹40 per lakh) on the funded
                    amount. The interest is applied from T+1 day until the day
                    MTF stocks are sold.
                  </li>
                  <li>
                    MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                    lower.
                  </li>
                  <li>
                    MTF pledge charge: ₹15 + GST per pledge and unpledge request
                    per ISIN.
                  </li>
                </ul>
              </>
            }
          />
        </div>
        <div className="col p-3">
          <Content
            heading="Account with debit balance"
            context={
              <>
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </>
            }
          />
          <Content
            heading="SEBI Charges"
            context={
              <>
                Charged at ₹10 per crore + GST by Securities and Exchange Board
                of India for regulating the markets.
              </>
            }
          />
          <Content
            heading="DP (Depository participant) charges"
            context={
              <>
                ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST)
                is charged on the trading account ledger when stocks are sold,
                irrespective of quantity.
                <br />
                <br />
                Female demat account holders (as first holder) will enjoy a
                discount of ₹0.25 per transaction on the CDSL fee.
                <br />
                <br />
                Debit transactions of mutual funds & bonds get an additional
                discount of ₹0.25 on the CDSL fee.
              </>
            }
          />
          <Content
            heading="Pledging charges"
            context={<>₹30 + GST per pledge request per ISIN.</>}
          />
          <Content
            heading="AMC (Account maintenance charges)"
            context={
              <>
                For BSDA demat account: Zero charges if the holding value is
                less than ₹4,00,000. To learn more about BSDA. <br />
                <br /> For non-BSDA demat accounts: ₹300/year + 18% GST charged
                quarterly (90 days).
              </>
            }
          />
          <Content
            heading="Corporate action order charges"
            context={
              <>
                ₹20 plus GST will be charged for OFS / buyback / takeover /
                delisting orders placed through Console.
              </>
            }
          />
          <Content
            heading="Off-market transfer charges"
            context={<>₹25 per transaction.</>}
          />
          <Content
            heading="Physical CMR request"
            context={
              <>
                First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
                for subsequent requests.
              </>
            }
          />
          <Content
            heading="Payment gateway charges"
            context={<>₹9 + GST (Not levied on transfers done via UPI)</>}
          />
          <Content
            heading="Delayed Payment Charges"
            context={
              <>
                Interest is levied at 18% a year or 0.05% per day on the debit
                balance in your trading account.
              </>
            }
          />
          <Content
            heading="Trading using 3-in-1 account with block functionality"
            context={
              <>
                <ul>
                  <li>
                    <b>Delivery & MTF Brokerage: </b>0.5% per executed order.
                  </li>
                  <li>
                    <b>Intraday Brokerage: </b>0.05% per executed order.
                  </li>
                </ul>
              </>
            }
          />
        </div>
      </div>
      <div className="row p-3">
        <h4 className="fs-4">Disclaimer</h4>
        <p className="text-muted disclaimer" style={{textAlign:"left"}}>
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
    </div>
  );
}
export default Brokerage;
