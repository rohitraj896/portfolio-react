import React from "react";
import "./Footer.css";
// import shapeImage from "../../../assets/Home/shape-bg.png";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
          src={require("../../../assets/Home/shape-bg.png")}
          // src={shapeImage}
          alt="no internet connection"
        />
      </div>
    </div>
  );
}
