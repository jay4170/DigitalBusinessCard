import React, { Component } from "react";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="about">
          <h2 className="titles">About</h2>
          <h3 className="blerbs">
            I am a web developer with a particular interest in cyber security. I
            try to keep up with security and best practices, and am always
            looking for new things to learn.
          </h3>
        </div>
        <div className="interests">
          <h2 className="titles">Interests</h2>
          <h3 className="blerbs">
            Food lover. Avid Reader. Internet fanatic. Travel geek. Coffee
            aficionado. Compulsive Gamer
          </h3>
        </div>
      </div>
    );
  }
}
