import React, { Component } from "react";
import "./App.css";

import logo from "./logo.svg";
import Input from "./components/Input/Input";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const access_token = "1394009005.3ee3dcd.b19c16774879468182aa8d20bebc82da";
    const url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${access_token}`;
    this.fetchImages(url);
  }

  fetchImages = url => {
    console.log(url);

    return fetch(url)
      .then(data => data.json())
      .then(json => {
        if (json) {
          console.log(json);
          return Promise.resolve(json);
        } else {
          return Promise.reject(Error("Błąd połączenia!"));
        }
      });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <img className="logo" src={logo} />
          <Input />
        </div>
      </div>
    );
  }
}

export default App;
