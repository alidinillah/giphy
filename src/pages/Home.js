import React from "react";
import "../App.css";
import { Component, Fragment } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import logo from "../giphy-logo.png";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <h1>WELCOME TO YOUR GIPHY</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <a href="/ironman">IRON MAN GIPHY</a>
            <a href="/search">SEARCH YOUR GIPHY</a>
          </header>
        </div>
      </Fragment>
    );
  }
}

export default Home;