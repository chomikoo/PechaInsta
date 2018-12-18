import React, { Component } from "react";
import "./App.css";

import logo from "./logo.svg";
import Input from "./components/Input/Input";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      photoNum: 0
    };
  }

  componentWillMount() {
    const access_token = "1394009005.3ee3dcd.b19c16774879468182aa8d20bebc82da";
    const url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${access_token}`;
    this.fetchImages(url);
  }

  fetchImages = url => {
    return fetch(url)
      .then(data => data.json())
      .then(json => {
        // console.log(json.data);
        this.setState({
          photos: json.data
        });
      })
      .catch();
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <img className="logo" src={logo} alt="Logo PechaKucha Insta" />
          <Input />
        </div>
        <div className="body">
          {this.state.photos.map(photo => {
            return (
              <div key={photo.id}>
                <img
                  src={photo.images.standard_resolution.url}
                  alt={photo.captioin}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
