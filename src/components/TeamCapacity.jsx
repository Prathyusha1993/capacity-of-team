import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { calculateCapacity } from "../util/capacityCalculator";

const teamMembers = [
    'Edward',
    'John',
    'Michael'
]

class TeamCapacity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: "",
            teamMembers: [{
                id: '1',
                name: 'Edward',
                capacity: 1
            },
            {
                id: '2',
                name: 'John',
                capacity: 0
            },
            {
                id: '3',
                name: 'Michael',
                capacity: 0
            }]
        };
    }

    handleCalculate = () => {

        const teamCapacity = calculateCapacity(this.state.teamMembers);

        this.setState({
            result: teamCapacity,
        });
    };

    handleCapacityChange = (id, capacity) => {


        const existingTeamMembers = this.state.teamMembers;

        const transformedTeamMembers = existingTeamMembers.map((teamMember) => {

            if(teamMember.id === id) {
                return {
                    id: teamMember.id,
                    name: teamMember.name,
                    capacity: capacity
                }
            } else {
                return {
                    id: teamMember.id,
                    name: teamMember.name,
                    capacity: teamMember. capacity
                }
            }

            
        });

        this.setState({teamMembers: transformedTeamMembers});
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
                        {
                            this.state.teamMembers.map((teamMember) => {
                                return (<Form.Group as={Row}>
                                    <Form.Label column sm="4">
                                        {teamMember.name} {teamMember.id}
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control
                                            type="number"
                                            value={teamMember.capacity}
                                            onChange={(e) => {
                                                this.handleCapacityChange(teamMember.id, e.target.value);
                                            }}
                                            placeholder="capacity"
                                        />
                                    </Col>
                                </Form.Group>);
                            })
                        }
                    </Form>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button onClick={this.handleCalculate} variant="primary">
                        Calculate
					</Button>{" "}
                </div>
                <div style={{ display: "flex", justifyContent: "center", marginTop: '20px' }}>
                    <label>Team Capacity is: {this.state.result}</label>
                </div>
            </div>
        );
    }
}

export default TeamCapacity;
