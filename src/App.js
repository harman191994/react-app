import React, { Component } from 'react';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";

class App extends Component {
  render() {
    return (
		<HashRouter>
        <div>
          <h1>Hello World</h1>
          <ul className="header">
            <li><NavLink exact to="/home">Home</NavLink></li>
            <li><NavLink to="/stuff">Content</NavLink></li>
          </ul>
          <div className="content">
			<Route path="/home" component={() => (<Home myProp="This App is all about ReactJs."/>)}/>            
			<Route path="/stuff" component={() => (<Stuff content="Content" />)}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
