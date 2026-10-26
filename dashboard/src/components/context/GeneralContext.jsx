import { createContext, useState } from "react";

import BuyActionWindow from "../orders/BuyActionWindow";

const GeneralContext = createContext({
  openBuyWindow: () => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = ({ children }) => {
  const [selectedStock, setSelectedStock] = useState(null);

  const openBuyWindow = (stockName) => {
    setSelectedStock(stockName);
  };

  const closeBuyWindow = () => {
    setSelectedStock(null);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow,
        closeBuyWindow,
      }}
    >
      {children}

      {selectedStock && (
        <BuyActionWindow
          uid={selectedStock}
          onClose={closeBuyWindow}
        />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;