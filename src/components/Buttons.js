import React, { Component } from "react";
import mail from "../images/mail_FILL0_wght400_GRAD0_opsz48.png";
import git from "../images/GitHub-Mark-Light-32px.png";
import "./Buttons.css";

export default class Buttons extends Component {
  mail() {
    window.location = "mailto:jay.hammond@live.com";
  }
  open() {
    window.open("https://github.com/jay4170", "_blank");
    console.log("test");
  }
  render() {
    return (
      <div className="buttons">
        <button className="mail" onClick={this.mail}>
          <img src={mail} className="butt_img" alt="Mail Icon"></img>
          Email
        </button>
        <button className="github" onClick={this.open}>
          <img src={git} className="butt_img" alt="GitHub Icon"></img>
          GitHub
        </button>
      </div>
    );
  }
}
