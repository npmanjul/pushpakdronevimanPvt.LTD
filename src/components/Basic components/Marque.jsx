import React from "react";
import "./marque.css";

const Marque = () => {
  const reglink = "https://forms.gle/7ydQEUYD3i4yiQTi7";

  return (
    <>
      <div className="marquee">
        <div className="marquee-content">
          <a href={reglink} target="_blank">
            Registration for Internship on Drone, 3D Printing, Design 2025 -{" "}
            <span className="marquee-link">Click Here</span>
            <span>
              &nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;Registration closes on
              05-July-2025 at 11:59 P.M.
            </span>
            <span>
              &nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;Internship starts on
              06-July-2025 in the Morning.
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Marque;
