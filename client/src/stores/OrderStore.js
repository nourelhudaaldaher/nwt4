import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

import ShoppingCartStore from './ShoppingCartStore';

class OrderStore extends EventEmitter
{
	constructor(){
		super();

		this.orders = [];
	}


	getOrders(){
		return this.orders;
	}


	receivedOrders(orders){
		//this.orders = orders;
		this.orders.push.apply(this.orders, orders);

		this.emit("change");
	}


	getOrderById(id){
		return $.grep(this.orders, function(e){ return e.Id == id; })[0];			
	}

	removeOrderById(id){
		this.orders = $.grep(this.orders, function(el, idx) {return el.Id == id}, true);
		this.emit("change");		
	}

	removeOrders(){
		this.orders = [];
	}

	updateOrder(order){
		for (var i in this.order) {
     		if (this.order[i].Id == order.Id) {
        		this.order[i] = order;
        		break; 
     		}
   		}
   		this.emit("change");
	}


	handleActions(action){
		console.log("Comment store received an action", action);

		switch(action.type){

			case "GET_ORDERS":{
				console.log("Dispatch received " + action.type);
			}
			case "RECEIVED_ORDERS":{
				this.receivedOrders(action.data);
			}



			case "CREATING_ORDER":
				console.log("Dispatch received " + action.type);
			break;
			case "ORDER_CREATED":
				if(action.data === "Success"){
					//ShoppingCartStore.removeAllGames();

				}
				else{

				}
			break;

			case "DELETING_ORDER":
				console.log("Dispatch received " + action.type);
			break;
			case "ORDER_DELETED":
				this.removeOrderById(action.id);
			break;

			case "UPDATING_ORDER":
				console.log("Dispatch received " + action.type);
			break;
			case "ORDER_UPDATED":
				this.updateOrder(action.order);
			break;
		}

	}
}

const store = new OrderStore;
dispatcher.register(store.handleActions.bind(store));
export default store;

