import React from 'react';

import * as Actions from "./actions/Actions";
import Store from "./stores/Store";

export default class SideFilter extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			selected:0
		}
	}	


	handleClick(i){
		this.setState({
			selected: i
		});

		Actions.filterByConsole(i);
	}


	render(){

		let selectedStyle = {
			color: "#2196f3",
			cursor: "pointer"
		}

		let list = ["All", "Nintendo Switch", "Nintendo Wii U", "PS4", "PS3", "XBox One", "XBox 360"]
					.map((item, i) => {
						return <a onClick={this.handleClick.bind(this, i)} key={i} className="list-group-item" 
						style={(i == this.state.selected) ? selectedStyle : {cursor: "pointer"} }>{item}</a>
					})

		return(
			 <div className="col-md-3">
			    <p className="lead">Consoles</p>
			    <div className="list-group">
			    	{list}
			    </div>
			 </div>

			);
	}
} 