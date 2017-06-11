import React from 'react';

import { Link } from "react-router";

import * as Actions from "../actions/OrderActions.js";

import Store from "../stores/OrderStore";

import OrderRow from "./OrderRow";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class OrdersList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
      		orders: []
    	};

    	this.getOrders = this.getOrders.bind(this);
    	this.handleLoadMore = this.handleLoadMore.bind(this);

    	this.loadOrders();

	}

	handleLoadMore(){
		Actions.loadMoreOrders(this.state.orders.length + 5);	
	}


	componentWillMount(){
		Store.on("change", this.getOrders);
	}

	componentWillUnmount(){
		Store.removeListener("change", this.getOrders);
		Store.removeOrders();
	}


  	
	loadOrders(){
		Actions.loadMoreOrders(5);	
	}

	getOrders(){
		this.setState({
			orders: Store.getOrders()
		})
		
	}

	render(){

		console.log(this.state.orders);

		const Orders = this.state.orders.map((order) => {
			return <OrderRow key={order.Id} Id={order.Id} order={order}/>
		});


		let style={
			color: "#2196f3",
			marginTop:"0px"
		}

		return(
			<div>
			  <h2 style={style}>Orders List</h2>
			  <table className="table table-hover">
			    <thead>
			      <tr>
				    <th>
				  		Id
				  	</th>
				  	<th>
				  		Date
				  	</th>
				  	<th>
				  		Ordered By
				  	</th>
				  	<th>
				  		Games
				  	</th>
				  	<th>
				  		Price
				  	</th>
					<th>
				  		Delivered
				  	</th>
				  	<th>
				  	</th>
			      </tr>
			    </thead>
				    <ReactCSSTransitionGroup
				    		component="tbody"
	                        transitionName="item"
	                        transitionEnterTimeout={600}
	                        transitionLeaveTimeout={400}
	                        >
				        {Orders}
				    </ReactCSSTransitionGroup>
			  </table>
			  <button className="btn btn-default" onClick={this.handleLoadMore}>Load More</button>
			</div>
			);
	}
}