import React, { Component } from "react";
import Clarifai from "clarifai";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import "./App.css";


const app = new Clarifai.App({
  apiKey: // "ENTER YOUR API KEY",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }
  onInputChange = (event) => {
    console.log(event.target.value);
  };
  onButtonSubmit = () => {
    console.log("click");
    app.models
      .predict(
        // "ENTER YOUR API KEY",
        "https://ichef.bbci.co.uk/news/923/cpsprodpb/865E/production/_126289343_gettyimages-1414013746.jpg"
      )
      .then(
        function (response) {},
        function (err) {}
      );
  };
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />

        {/*<FaceRecognition />*/}
      </div>
    );
  }
}
export default App;
