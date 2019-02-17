import React, { Component } from "react";
import Child from "./Home";
 
class Stuff extends Component {
  render() {
	  var myContent = this.props.content;
    return (
      <div>
        <h2>{myContent}</h2>
		<div><Child/></div>
        <ol>
          <li>ReactJs</li>
          <li>ReduxJs</li>
          <li>React-Redux</li>
        </ol>
      </div>
    );
  }
}
 
export default Stuff;