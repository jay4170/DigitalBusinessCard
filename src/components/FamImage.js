import React, { Component } from "react";
import familyPicture from "../images/DSCF2142.JPG";
import "./FamImage.css";

export default class FamImage extends Component {
  render() {
    return (
      <div>
        <img
          className="photo"
          alt="family around fire pit"
          src={familyPicture}
        ></img>
      </div>
    );
  }
}
