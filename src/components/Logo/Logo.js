import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import ticha from "./ticha.jpeg";

const Logo = () => {
  return (
    <Tilt
      className="Tilt br2 shadow-2 ml4"
      options={{ max: 55 }}
      style={{ height: 150, width: 150 }}
    >
      <div className="Tilt-inner">
        {" "}
        <img alt="logo" src={ticha} />{" "}
      </div>
    </Tilt>
  );
};

export default Logo;
