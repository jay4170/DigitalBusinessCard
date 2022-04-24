import React, { Component } from "react";
import bulb from "../images/lightbulb_FILL0_wght400_GRAD0_opsz48.png";
import "./LightMode.css";

export default class LightMode extends Component {
  render() {
    return (
      <button className="bulb">
        <img src={bulb} alt="lightbulb"></img>
      </button>
    );
  }
}
