import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
//import logo from "../images/logo.png";

class Header extends Component {
	render() {
		return (
			<div>
				<Navbar expand="lg" variant="light" bg="light">
					<Navbar.Brand href="#" >Company Name</Navbar.Brand>
				</Navbar>
			</div>
		);
	}
}

export default Header;
