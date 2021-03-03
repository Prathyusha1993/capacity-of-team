/**
 * This function calculates the capacity of the team based on individual capacities passed.
 *
 * params
 *  individualCapacities - array of capacities(number)
 */
export const calculateCapacity = (teamMembers) => {
	let teamCapacity = 0;

    // write your logic to calcualte capacity
    
    teamCapacity = teamMembers.reduce((accumulator, teamMember) => {
        return parseInt(accumulator) + parseInt(teamMember.capacity);
    }, 0)

	return teamCapacity;
};
