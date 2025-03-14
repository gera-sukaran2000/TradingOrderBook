import React from "react";

const PriceSection = ({ type, data = [] }) => {
  return (
    <section
      style={{
        display: "flex",
        flex: 1,
        color: "#c6d8e9",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {type == "ask" && (
        <h5>
          Price{" "}
          <span
            style={{
              backgroundColor: "#4f5b67",
              padding: "4px",
              color: "#c6d8e9",
              borderRadius: "4px",
              fontSize: "13px",
            }}
          >
            USD
          </span>
        </h5>
      )}
      <ul
        id="priceItemAsk"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          margin: "0px",
          padding: "0px",
          width: "100%",
        }}
      >
        {data.map((elem, index) => (
          <li
            key={index}
            style={{
              textAlign: "left",
              listStyleType: "none",
              color: type == "ask" ? "#ff5067" : "#49a77d",
              marginBottom: "5px",
              position: "relative",
              width: "100%",
            }}
          >
            <div
              style={{
                position: "absolute",
                backgroundColor:
                  index == data.length - 1 && type == "ask"
                    ? "#ff5067"
                    : index == 0 && type == "bid"
                    ? "#49a77d"
                    : null,
                width: "100%",
                height: "100%",
                opacity: 0.2,
              }}
            />
            <span
              style={{
                zIndex: 1,
              }}
            >
              {elem.price}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PriceSection;
