import React from "react";
import calculate from "../logic/calculate";
import Menu from "./Menu";


export default class App extends React.Component {

  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <Menu/>
      </div>
    );
  }
}
