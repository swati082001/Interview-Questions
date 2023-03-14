import React, { Component } from "react";

export default class Count1 extends Component {
  componentDidUpdate(prevprops, prevState) {
    if (prevprops.number !== this.props.number) {
      console.log("this is updating phase");
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    );
  }
}
