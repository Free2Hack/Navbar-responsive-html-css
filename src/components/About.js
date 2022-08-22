import React from "react";

const About = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="face"
        style={{
          background: "red",
          height: "400px",
          width: "400px",
          borderRadius: "50%",
          position: "relative",
        }}
      >
        <div
          style={{
            background: "white",
            position: "absolute",
            height: "150px",
            width: "150px",
            top: "25px",
            borderRadius: "100%",
          }}
        >
          <div
            className="eyes"
            style={{
              background: "black",
              position: "absolute",
              height: "80px",
              width: "80px",
              top: "25px",
              borderRadius: "100%",
            }}
          ></div>
        </div>
        <div
          style={{
            background: "white",
            position: "absolute",
            height: "150px",
            width: "150px",
            top: "25px",
            right: "25px",
            borderRadius: "100%",
          }}
        >
          <div
            className="eyes"
            style={{
              background: "black",
              position: "absolute",
              height: "80px",
              width: "80px",
              top: "25px",
              borderRadius: "100%",
            }}
          ></div>
        </div>
        <div
          style={{
            background: "black",
            position: "absolute",
            height: "150px",
            width: "30px",
            top: "150px",
            left: "175px",
            borderRadius: "100%",
          }}
        ></div>
        <div
          style={{
            background: "white",
            position: "absolute",
            height: "160px",
            width: "10px",
            bottom: "0px",
            left: "190px",
            borderRadius: "100px 100px",
            transform: "rotate(90deg)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default About;
