import React, { Component } from "react";
 
class Home extends Component {
  render() {
	  var name = this.props.myProp;
	  console.log(name)
	  const greeting = "Welcome to React";
    return (
      <div>
        <h2>{greeting}</h2>
        <p>{name}</p>
      </div>
    );
  }
}
 
export default Home;