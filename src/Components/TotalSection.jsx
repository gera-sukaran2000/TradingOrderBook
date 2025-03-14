import React from "react";
import ListWithProgress from "./ProgressList";

const TotalSection = ({ type,data=[] }) => {
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
          Total{" "}
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
      <ListWithProgress type={type} data={data}/>
    </section>
  );
};

export default TotalSection;
