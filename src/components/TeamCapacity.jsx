import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { calculateCapacity } from "../util/capacityCalculator";

class TeamCapacity extends Component {
	constructor(props) {
		super(props);
		this.state = {
			result: "",
			capacity1: "",
			capacity2: "",
		};
	}

	handleCalculate = () => {
		const { capacity1, capacity2 } = this.state;

		const teamCapacity = calculateCapacity();

		// this.setState({
		//     result: (parseInt(capacity1)+parseInt(capacity2))
		// });

		this.setState({
			result: teamCapacity,
		});
	};

	handleChange = (e) => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	};

	/**
	 * currently the names in the form are hardcoded
	 * it has to be enhanced to handle new team members added to the team.
	 */
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
								<Form.Control
									type="number"
									name="capacity1"
									value={this.state.capacity1}
									onChange={this.handleChange}
									placeholder="capacity"
								/>
							</Col>
						</Form.Group>

						<Form.Group as={Row} controlId="formPlaintextPassword">
							<Form.Label column sm="4">
								John
							</Form.Label>
							<Col sm="8">
								<Form.Control
									type="number"
									name="capacity2"
									value={this.state.capacity2}
									onChange={this.handleChange}
									placeholder="capacity"
								/>
							</Col>
						</Form.Group>
					</Form>
				</div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<Button onClick={this.handleCalculate} variant="primary">
						Calculate
					</Button>{" "}
				</div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<label>Team Capacity is: {this.state.result}</label>
				</div>
			</div>
		);
	}
}

export default TeamCapacity;
