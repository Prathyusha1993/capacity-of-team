import React, { Component } from "react";
//import Switch from "react-bootstrap/esm/Switch";
import "../../App.css";
import TeamCapacity from "../TeamCapacity";
import Home from '../Home';
import TeamMember from '../TeamMember'
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

class SideNavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Router>
				<div className="sidenav">
					<Link to="/home">
						<p>Home</p>
					</Link>
					<Link to="/TeamCapacity">
						<p>Capacity</p>
					</Link>
					<Link to="/TeamMember">
						<p>Team</p>
					</Link>
				</div>
				<div className="contents">
					<Switch>
					<Route exact path="/Home">
							<Home />
						</Route>
						<Route exact path="/TeamCapacity">
							<TeamCapacity />
						</Route>
						<Route exact path="/TeamMember">
							<TeamMember />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default SideNavBar;

