import React from 'react';

import { Link } from "react-router";

import * as Actions from "../actions/UserActions.js";

import Store from "../stores/OrderStore";

export default class OrderDetails extends React.Component{
	constructor(props){
		super(props);

		this.state = {
				order: Store.getOrderById(this.props.params.id)
			}
	}

	render(){
		const Price = this.state.order.Price;

		return(
			  <div>
			  	{Price}
			  </div>
			);
	}
}