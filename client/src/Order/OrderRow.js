import React from 'react';

import { Link } from "react-router";

import * as Actions from "../actions/OrderActions.js";

import moment from 'moment';

export default class OrderRow extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			delivered: this.props.order.Delivered
    	};

    	this.onDeleteClick = this.onDeleteClick.bind(this);
    	this.handleDeliveredOnChange = this.handleDeliveredOnChange.bind(this);
	}

	handleDeliveredOnChange(event){
		event.preventDefault();

		this.setState({
			delivered: !this.state.delivered
		});

		let newOrder = this.props.order;
		newOrder.Delivered = !newOrder.Delivered;
		Actions.updateOrder(newOrder);
	}

	onDeleteClick(event){
		event.preventDefault();

		Actions.deleteOrder(this.props.Id);
	}

	render(){
		let games = "";
		games = this.props.order.Games.map((game)=>{
			return <li key={game.Id}>{game.Name}</li>;
		});

		return(
			  <tr>
			  	<td>
			  		{this.props.Id}
			  	</td>
			  	<td>
			  		{moment(this.props.Date).format('MMMM Do YYYY, h:mm:ss a')}
			  	</td>
			  	<td>
			  		{this.props.order.User.FirstName + " " + this.props.order.User.LastName}
			  	</td>				
			  	<td>
			  		<ul>
			  			{games}
			  		</ul>	
			  	</td>
			  	<td>
			  		{this.props.order.Price}
			  	</td>
			  	<td>
			  		<div className="checkbox" style={{textAlign:"center"}}>
			  			<input type="checkbox" checked={this.state.delivered ? "checked" : ""} 
			  				onChange={this.handleDeliveredOnChange}/>
			  		</div> 
			  	</td>
			  	<td>

			  		<button  className="btn btn-danger" onClick={this.onDeleteClick}>Delete</button>

			  	</td>
			  </tr>
			);
	}
}