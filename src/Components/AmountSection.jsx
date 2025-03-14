import React from "react";

const AmountSection = ({ type, data = [] }) => {
  return (
    <section
      style={{
        display: "flex",
        flex: 1,
        color: "#c6d8e9",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      {type == "ask" && (
        <h5>
          Amount{" "}
          <span
            style={{
              backgroundColor: "#4f5b67",
              padding: "4px",
              color: "#c6d8e9",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          >
            BTC
          </span>
        </h5>
      )}
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          margin: "0px",
          padding: "0px",
          width: "100%",
        }}
      >
        {data.map((elem, index) => (
          <li
            key={index}
            style={{
              listStyleType: "none",
              color: "white",
              marginBottom: "5px",
            }}
          >
            {elem.size}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AmountSection;
