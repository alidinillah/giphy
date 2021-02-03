import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IronMan from "./pages/IronMan";
import Search from "./pages/Search";
import Home from "./pages/Home";
import { Component, Fragment } from "react";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/" exact component={Home} />
          <Route path="/ironman" component={IronMan} />
          <Route path="/search" component={Search} />
        </Fragment>
      </Router>
    );
  }
}

export default App;