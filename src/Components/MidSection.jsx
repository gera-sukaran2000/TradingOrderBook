import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const MidSection = ({ asks = [], bids = [] }) => {
  return (
    <div
      style={{
        backgroundColor: "#211c1c",
        textAlign: "left",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          gap: "10%",
          alignItems: "center",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20%",
            padding: "10px",
          }}
        >
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            size="lg"
            style={{ color: "#49a77d" }}
          />
          <h4 style={{ color: "#49a77d", paddingTop: "5px" }}>
            {asks[0]?.price}
          </h4>
        </span>
        <h5 style={{ color: "white", paddingTop: "5px" }}>{bids[0]?.price}</h5>
      </div>
    </div>
  );
};

export default MidSection;
