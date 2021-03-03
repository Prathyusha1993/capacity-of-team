import React, { Component } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import AccordianCollapse from "./AccordianCollapse";
//import  Panel  from "react-bootstrap/lib/Panel";

class TeamCapacity extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: "",
			data: [
				{ id: 1, name: "Edward", capacity: "2" },
				{ id: 2, name: "Rebekha", capacity: "1" },
				{ id: 3, name: "Stefan", capacity: "4" },
			],
			activeKey: "",
		};
	}

	handleButton = () => {};

	// handleActiveKeyChange = (activeKey) => {
	// 	if (this.state.activeKey === activeKey) {
	// 		activeKey = -1;
	// 	}
	// 	this.setState({ activeKey });
	// };

	render() {
		return (
			<div>
				<div>
					<Accordion>
						 {/* <Card >
							<Card.Header>
								<Accordion.Toggle as={Button} variant="link" eventKey="0">
									Add Capacity
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="0">
								<Card.Body>Edward</Card.Body>
							</Accordion.Collapse>
						</Card>  */}
                        {this.state.data.map((entry, index) => {
                            return <Panel header={entry.name} eventKey={entry.id} key={entry.id}>
                                <AccordianCollapse capacity={entry.capacity}/>
                            </Panel>
                        })}

					</Accordion>
					{/* <Accordion activeKey={this.state.activeKey}>
						{this.state.data.map((item, index) => (
							<Item
								eventKey={index}
								handleActiveKeyChange={this.handleActiveKeyChange}
							/>
						))}
					</Accordion> */}
				</div>
				<br />
				<button
					className="btn btn-primary btn-block btn-lg login-btn"
					onClick={this.handleButton}
					style={{ width: "100px", height: "40px" }}
				>
					Calculate
				</button>
				<label>{this.state.number}</label>
			</div>
		);
	}
}

export default TeamCapacity;
