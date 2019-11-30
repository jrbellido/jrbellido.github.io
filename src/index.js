import React from "react";
import { render } from "react-dom";
import { createHistory, LocationProvider, Router, Link } from '@reach/router'
import createHashSource from 'hash-source'

import './global.scss'

const source = createHashSource();
const history = createHistory(source);

const Home = () => {
	return (
		<div>Home</div>
		);
}

const Posts = () => {
	return (
		<div>Im a post</div>
		);
}

const App = ({ children }) => (
  <LocationProvider history={history}>
  	<Link to="/">Home</Link>
  	<Link to="/posts">Posts</Link>
    <Router> 
      <Home path="/" />
      <Posts path="/posts" />
    </Router>
  </LocationProvider>
);

//render(<App />, document.getElementById("main"));

