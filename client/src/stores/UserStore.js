import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

import * as Actions from '../actions/UserActions';

class UserStore extends EventEmitter
{
	constructor(){
		super();

		this.users = [];
		this.user = null;
	}

	getUsers(){
		return this.users;
	}

	receivedUsers(users){
		this.users.push.apply(this.users, users);
		this.emit("change");
	}

	removeUserById(id){
		this.users = $.grep(this.users, function(el, idx) {return el.Id == id}, true);
		this.emit("change");		
	}

	getUser(){
		return this.user;
	}

	setUser(user){
		this.user = user;

		this.emit("change");
	}

	removeUser(){
		this.user = null;

		this.emit("change");
	}

	removeUsers(){
		this.users = [];
	}

	handleActions(action){
		console.log("User store received an action", action.type);

		switch(action.type){

			case "REGISTERING_USER":
				console.log("Dispatch received " + action.type);
			break;
			case "USER_REGISTERED":
				console.log("Register Success!" + action.data);
				
			break;

			case "LOGINGIN_USER":
				console.log("User logingin");
			break;
			case "USER_LOGEDIN":
				console.log("User logedin");
				this.setUser(action.data);
			break;

			case "LOGOUT_USER":
				console.log("User loging out");
				this.removeUser();
			break;


			case "GET_USERS":
				console.log("Dispatch received " + action.type);
			break;

			case "RECEIVED_USERS":
				this.receivedUsers(action.data);
			break;

			case "DELETING_USER":
				console.log("Deleting user");
			break;

			case "USER_DELETED":
				this.removeUserById(action.id);
			break;

			case "UPDATING_USER":
				console.log("Dispatch received " + action.type);
			break;
			case "USER_UPDATED":
				this.setUser(action.user);
			break;

		}
	}
}

const store = new UserStore;
dispatcher.register(store.handleActions.bind(store));
export default store;