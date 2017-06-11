import { EventEmitter } from "events";
import dispatcher from "../dispatcher"

class AlertStore extends EventEmitter
{
	constructor(){
		super();

		this.alerts = [];
	}


	getAlert(){
		return this.alerts[0];
	}


	receivedAlert(alert){
		this.alerts[0] = alert;

		this.emit("change");
	}

	handleActions(action){
		console.log("Alert store received an action", action);

		switch(action.type){


			case "DISPLAY_ALERT":{
				this.receivedAlert(action.data);
			}

		}

	}
}

const store = new AlertStore;
dispatcher.register(store.handleActions.bind(store));
export default store;

