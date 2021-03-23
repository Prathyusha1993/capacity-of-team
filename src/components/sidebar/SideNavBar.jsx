import React, { Component } from "react";
//import Switch from "react-bootstrap/esm/Switch";
import "../../App.css";
import TeamCapacity from "../TeamCapacity";
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
					<Link to="/home">
						<p>Friends</p>
					</Link>
					<Link to="/home">
						<p>Team</p>
					</Link>
				</div>
				<div className="contents">
					<Switch>
						<Route exact path="/TeamCapacity">
							<TeamCapacity />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default SideNavBar;

{
	/*<div className="Sidebar">
				 <ul className="SidebarList">
					{SideBarData.map((val, key) => {
						return (
							<li
								key={key}
								className="row"
								id = {window.location.pathname === val.link ? 'active' : ''}
								onClick={() => {
									window.location.pathname = val.link;
								}}
							>
								<div id="icon">{val.icon}</div>{" "}
								<div id="title">{val.title}</div>
							</li>
						);
					})}
				</ul> 
			</div>*/
}
