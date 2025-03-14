import React, { useState } from "react";
import "./ProgressList.css";
import { ProgressBar } from "react-bootstrap";

const ListWithProgress = ({ type, data = [] }) => {
  // Define the progress for each list item as an array of percentages
  const [progressList, setProgressList] = useState([70, 50, 90, 30, 6]);

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {/* Unordered List */}
      <ul
        style={{
          listStyleType: "none",
          padding: "0px",
          marginLeft: "5px",
        }}
      >
        {data.map((progress, index) => (
          <li
            key={index}
            style={{
              position: "relative",
              marginBottom: "5px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Progress Bar Background */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#242424", // Light gray background for progress
              }}
            />
            <ProgressBar
              max={0.01}
              now={progress.size}
              min={0}
              className={type == "ask" ? "red-bar" : "green-bar"}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: 0.2,
                backgroundColor: "#242424", // Red for progress
              }}
            />
            {/* Text inside the list item */}
            <span
              style={{
                position: "relative",
                zIndex: 1, // Make sure text is above the progress bar
                color:
                  index == progressList.length - 1
                    ? type == "ask"
                      ? "#ff5067"
                      : "#49a77d"
                    : "white",
                display: "flex",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              {progress.total}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListWithProgress;
