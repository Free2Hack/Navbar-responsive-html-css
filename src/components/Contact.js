import React from "react";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="container">
      <button className="btn">ANIME</button>
      <div className="box">
        <div className="card" id="front">
          Front
        </div>
        <div className="card" id="back">
          Back
        </div>
        <div className="card" id="left">
          Left
        </div>
        <div className="card" id="right">
          Right
        </div>
        <div className="card" id="top">
          Top
        </div>
        <div className="card" id="bottom">
          Bottom
        </div>
      </div>
    </div>
  );
};

export default Contact;
