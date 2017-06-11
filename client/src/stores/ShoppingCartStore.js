import { EventEmitter } from "events";

import dispatcher from "../dispatcher"

class ShoppingCartStore extends EventEmitter
{
	constructor(){
		super();
	
		this.games = [];

	}

	addGame(game){
		this.games.push(game);


		this.emit("change");
	}


	removeGame(game){
		var index = this.games.indexOf(game);
		
		if (index > -1) {
		    this.games.splice(index, 1);
		}


		this.emit("change");
	}

	getAllGames(){
		return this.games;
	}

	getNumberOfGames(){
		return this.games.length;
	}

	removeAllGames(){
		this.games = [];
		this.emit("change");
	}


	handleActions(action){
		console.log("Dispatch received in ShoppingCartStore - " + action.type);
		switch(action.type){
				
			case "ADD_GAME":
				this.addGame(action.game);
			break;

			case "REMOVE_GAME":
				this.removeGame(action.game);
			break;

		}

	}
}

const store = new ShoppingCartStore;
dispatcher.register(store.handleActions.bind(store));
export default store;

window.store = store;