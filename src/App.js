import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import User from "./User";
import Landing from "./Landing";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/user" component={User} />
      </Switch>
    );
  }
}

export default App;
