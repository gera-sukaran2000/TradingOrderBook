import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./OrderBook.css";
import PriceSection from "./PriceSection";
import AmountSection from "./AmountSection";
import MidSection from "./MidSection";
import TotalSection from "./TotalSection";
import { Centrifuge } from "centrifuge";
import { askContext } from "../../data/store";
import Logo from "../assets/Logo.png";
const OrderBook = () => {
  const [connected, setConnected] = useState(false);

  const { asks, addAsks, bids, addBids } = useContext(askContext);

  useEffect(() => {
    const centrifuge = new Centrifuge(`${import.meta.env.VITE_RABBITX_URL}`, {
      token: `${import.meta.env.VITE_RABBITX_KEY}`,
    });
    const sub = centrifuge.newSubscription(
      `${import.meta.env.VITE_RABBITX_CHANNEL}`
    );

    sub.on("publication", function (ctx) {
      const { asks, bids } = ctx.data;
      addAsks(asks);
      addBids(bids);
    });

    sub.on("subscribed", function (ctx) {
      const { asks, bids } = ctx.data;
      addAsks(asks);
      addBids(bids);
    });

    sub.subscribe();

    centrifuge.connect();

    centrifuge.on("connected", (ctx) => {
      setConnected(true);
    });

    centrifuge.on("connecting", () => {
      setConnected(false);
    });
  }, []);

  let content = !connected ? (
    <div>
      <img src={Logo} />
      <h2 style={{ color: "white", marginTop: 20 }}>Please wait ...</h2>
    </div>
  ) : (
    <div className="mainDiv">
      <div className="headerBlock">
        <PriceSection type={"ask"} data={asks} />

        <AmountSection type={"ask"} data={asks} />

        <TotalSection type={"ask"} data={asks} />
      </div>

      {/* mid section */}
      <MidSection asks={asks} bids={bids} />

      {/* bid section */}
      <div className="headerBlock">
        <PriceSection type={"bid"} data={bids} />

        <AmountSection type={"bid"} data={bids} />

        <TotalSection type={"bid"} data={bids} />
      </div>
    </div>
  );

  return content;
};

export default OrderBook;
