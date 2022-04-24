import React, { Component } from "react";
import About from "./About";
import Buttons from "./Buttons";
import Links from "./Links";

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <Links />
        <Buttons />
        <About />
      </div>
    );
  }
}
