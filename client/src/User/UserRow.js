import React from 'react';

import { Link } from "react-router";

import * as Actions from "../actions/UserActions.js";

export default class UserRow extends React.Component{
	constructor(props){
		super(props);
		this.state = {

    	};

		this.onDeleteClick = this.onDeleteClick.bind(this);
	}


  	onDeleteClick(event){
    	event.preventDefault();
    	Actions.deleteUser(this.props.Id);
  	}

	render(){

		return(
			  <tr>
			  	<td>
			  		{this.props.Id}
			  	</td>
			  	<td>
			  		{this.props.Email}
			  	</td>

				<td>
			  		{this.props.Password}
			  	</td>

				<td>
			  		{this.props.FirstName}
			  	</td>
				<td>
			  		{this.props.LastName}
			  	</td>
			  	<td>
			  		<button className="btn btn-danger" onClick={this.onDeleteClick}>Delete</button>	
			  	</td>
			  </tr>
			);
	}
}