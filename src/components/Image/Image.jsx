import React, { Component } from "react";
import "./Image.css";

class Image extends Component {
  render() {
    const { src, alt } = this.props;
    return (
      <div className="img-box">
        <img src={src} alt={alt} />
      </div>
    );
  }
}

export default Image;
