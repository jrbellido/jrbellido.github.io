import React from "react";
import { render } from "react-dom";
import { Router, Link } from '@reach/router'

import './global.scss'

const Home = () => {
	return (
		<div>Home</div>
		);
}

const Posts = () => {
	console.log("Running posts...");
	return (
		<div>Im a post</div>
		);
}

const App = ({ children }) => (
  <div>
  	<div>I'm fixed</div>
  	<Link to="/#/">Home</Link>
  	<Link to="/#/posts">Posts</Link>
    <Router>
      <Home path="#/" />
      <Posts path="#/posts" />
    </Router>
  </div>
);

render(<App />, document.getElementById("main"));
