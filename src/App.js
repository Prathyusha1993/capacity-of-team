//import logo from "./logo.svg";
import "./App.css";
import React, {Component} from 'react'
//import TeamCapacity from "./components/TeamCapacity";
import Header from "./components/Header";
import SideNavBar from './components/sidebar/SideNavBar';
import TeamCapacity  from "./components/TeamCapacity";

class App extends Component {
	render() {
		return (
			<div className="App">
        <Header />
        <br />
        {/* <SideNavBar /> */}
        {/* <TeamCapacity /> */}
        <TeamCapacity />
			</div>
		);
	}
}

export default App;
