	import React from 'react';

import { Link } from "react-router";

import * as Actions from "../actions/CommentsActions.js";

import moment from 'moment';

export default class OrderRow extends React.Component{
	constructor(props){
		super(props);
		this.state = {

    	};

    	this.onDeleteClick = this.onDeleteClick.bind(this);
	}

	onDeleteClick(event){
		event.preventDefault();

		Actions.deleteComment(this.props.Id);
	}

	render(){

		

		return(
			  <tr>
			  	<td>
			  		{this.props.Id}
			  	</td>
			  	<td>
			  		{moment(this.props.Date).format('MMMM Do YYYY, h:mm:ss a')}
			  	</td>

				<td>
			  		{this.props.Name}
			  	</td>

			  	<td>
			  		{this.props.Content}
			  	</td>

				<td>
			  		{this.props.Score}
			  	</td>

			  	<td>

			  		<button className="btn btn-danger" onClick={this.onDeleteClick}>Delete</button>

			  	</td>
			  </tr>
			);
	}
}