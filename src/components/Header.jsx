import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
//import logo from "../images/logo.png";

class Header extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
    
	render() {
		return (
			<div>
					<Navbar expand="lg" variant="light" bg="light">
						<Navbar.Brand href="#">Team</Navbar.Brand>
					</Navbar>
			</div>
		);
	}
}

export default Header;
