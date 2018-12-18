import React, { Component } from "react";
import "./App.css";

import logo from "./logo.svg";
import Input from "./components/Input/Input";
import Image from "./components/Image/Image";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      photoNum: 20
    };
  }

  componentWillMount() {
    // const access_token = "1394009005.3ee3dcd.b19c16774879468182aa8d20bebc82da";
    const tag = "christmas";
    const url = `https://www.instagram.com/explore/tags/${tag}/?__a=1`;
    this.fetchImages(url);
  }

  fetchImages = url => {
    return fetch(url)
      .then(data => data.json())
      .then(json => {
        const photoArr = [];
        for (let i = 0; i < this.state.photoNum; i++) {
          photoArr.push(
            json.graphql.hashtag.edge_hashtag_to_media.edges[i].node
          );
        }
        console.log(photoArr);
        this.setState({
          photos: photoArr
        });
      })
      .catch(console.log("Error api"));
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
              <Image
                key={photo.id}
                src={photo.thumbnail_src}
                alt={photo.edge_media_to_caption.edges[0].node.text}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
