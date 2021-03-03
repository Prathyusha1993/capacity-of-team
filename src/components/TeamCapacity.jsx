import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

class TeamCapacity extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "30",
			capacity:''
		};
	}

	handleCalculate = () => {

	};

	handleChange = (e) => {
		e.preventDefault();
		//this.setState({[e.target.name] :  })
	}

	render() {
		return (
			<div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<Form>
						<Form.Group as={Row} controlId="formPlaintextEmail">
							<Form.Label column sm="4">
								Edward
							</Form.Label>
							<Col sm="8">
								<Form.Control type="number" name='sum' value={this.state.capacity} onChange={this.handleChange} placeholder="capacity" />
							</Col>
						</Form.Group>

						<Form.Group as={Row} controlId="formPlaintextPassword">
							<Form.Label column sm="4">
								John
							</Form.Label>
							<Col sm="8">
								<Form.Control type="number" name='sum' value={this.state.capacity} onChange={this.handleChange} placeholder="capacity" />
							</Col>
						</Form.Group>
					</Form>
				</div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<Button onClick={this.handleCalculate} variant="primary">Calculate</Button>{" "}
				</div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<label>Team Capacity is: {this.state.value}</label>
				</div>
			</div>
		);
	}
}

export default TeamCapacity;
