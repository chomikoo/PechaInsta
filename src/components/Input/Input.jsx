import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "#"
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value.toLowerCase()
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Podaj tag
          <input
            onChange={this.handleChange}
            value={this.state.value}
            type="text"
            className="input-text"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Input;
