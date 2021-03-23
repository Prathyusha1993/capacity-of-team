import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
//import logo from "../images/logo.png";

class Header extends Component {
	render() {
		return (
			<div >
				<Navbar style={{backgroundColor: "#131921"}}  expand="lg" >
					<Navbar.Brand href="#" style={{color: "white"}}>Company Name</Navbar.Brand>
				</Navbar>
			</div>
		);
	}
}

export default Header;
