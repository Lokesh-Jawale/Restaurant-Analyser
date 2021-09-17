import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Form from './components/Form';
import Table from './components/Table';

function App() {
	return (
		<div className="App">
			<Router>
				<h1>Restaurant Analyser</h1>
				<Navbar />
				<Switch>
					<Route path="/restaurant-analyser" exact component={() => <Form />} />
					<Route path="/restaurant-analyser/table" exact component={() => <Table />} />
				</Switch>
			</Router>
	  	</div>
	)
}

export default App
