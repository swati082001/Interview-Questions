import React, { Component } from "react";
import Count from "./components/count";
import Count1 from "./components/count1";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("component will mount in initial phase");
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  componentWillUnmount() {
    console.log("Component is unmounted");
  }

  render() {
    return (
      <div>
        <Count number={this.state.count} />
        <button onClick={() => this.increment()}>Click me!</button>
      </div>
    );
  }
}
