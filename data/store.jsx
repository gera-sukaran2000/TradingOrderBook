import { createContext, useRef, useState } from "react";

export const askContext = createContext();

const Provider = function ({ children }) {
  const [asks, setAsks] = useState([]);
  const [bids, setBids] = useState([]);

  const totalAksBTC = useRef(0.0);
  const totalBidBTC = useRef(0.0);

  function addAsks(data) {
    if (data.length)
      data.forEach((element) => {
        setAsks((prev) => {
          totalAksBTC.current = totalAksBTC.current + parseFloat(element[1]);

          if (prev.length == 10) {
            return [
              {
                price: element[0],
                size: element[1],
                total: totalAksBTC.current.toFixed(4),
              },
              ...prev.slice(0, 9),
            ];
          } else
            return [
              {
                price: element[0],
                size: element[1],
                total: totalAksBTC.current.toFixed(4),
              },
              ...prev,
            ];
        });
      });
  }

  function addBids(data) {
    if (data.length)
      data.forEach((element) => {
        setBids((prev) => {
          totalBidBTC.current = totalBidBTC.current + parseFloat(element[1]);

          if (prev.length == 10) {
            return [
              {
                price: element[0],
                size: element[1],
                total: totalBidBTC.current.toFixed(4),
              },
              ...prev.slice(0, 9),
            ];
          } else
            return [
              {
                price: element[0],
                size: element[1],
                total: totalBidBTC.current.toFixed(4),
              },
              ...prev,
            ];
        });
      });
  }

  return (
    <askContext.Provider value={{ asks, bids, addAsks, addBids }}>
      {children}
    </askContext.Provider>
  );
};

export default Provider;
