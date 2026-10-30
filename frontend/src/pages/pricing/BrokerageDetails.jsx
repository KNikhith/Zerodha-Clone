import { useState } from "react";
import { tabsData } from "./brokerageData.js";
import BrokerageContent from "./BrokerageContent.jsx";

function BrokerageDetails() {
  const [activeTab, setActiveTab] = useState("Equity");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="row mt-5 pricing-brokerage">
      <div className="p-4 tabs">
        <div className="d-flex">
          <h4
            className={`${activeTab === "Equity" ? "active" : ""}`}
            onClick={() => handleTabChange("Equity")}
          >
            Equity
          </h4>
          <h4
            className={`${activeTab === "FandO" ? "active" : ""} d-md-none`}
            onClick={() => handleTabChange("FandO")}
          >
            F&O
          </h4>
          <h4
            className={`${activeTab === "Currency" ? "active" : ""}`}
            onClick={() => handleTabChange("Currency")}
          >
            Currency
          </h4>
          <h4
            className={`${activeTab === "Commodity" ? "active" : ""}`}
            onClick={() => handleTabChange("Commodity")}
          >
            Commodity
          </h4>
        </div>
        <hr className="m-0" />
      </div>
      <div className="border tabsContent my-1 px-0">
        <BrokerageContent data={tabsData[activeTab]} />
      </div>
      <p className="text-center fs-5 my-4">
        <a href="#" className="text-decoration-none">
          Calculate your costs upfront
        </a>{" "}
        using our brokerage calculator
      </p>
    </div>
  );
}

export default BrokerageDetails;
