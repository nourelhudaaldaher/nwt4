import { EventEmitter } from "events";

import dispatcher from "../dispatcher"

class Store extends EventEmitter
{
	constructor(){
		super();

		this.games = [];

		this.console = 0;
		
	}



		getAllGames() {
			return this.games;
			
		}

		getGames(number){
			return this.games.slice(0, number);
		}

		getGameById(id){
			return $.grep(this.games, function(e){ return e.Id == id; })[0];			
		}

	receivedGames(games){
		this.games.push.apply(this.games, games);

		console.log(this.games);

		var self = this;

		setTimeout(function() {
		  self.emit("change");
		}, 0);
	}

	addGame(game){
		this.games.push(game);

	}

	removeGameById(id){
			this.games = $.grep(this.games, function(el, idx) {return el.Id == id}, true);
			this.emit("change");		
		}

	updateGame(game){
		for (var i in this.games) {
     		if (this.games[i].Id == game.Id) {
        		this.games[i] = game;
        		break; 
     		}
   		}
	}

	removeGames(console){
		if(console !== undefined){
			this.console = console;
		}
		

		this.games = [];
	}

	getConsole(){
		return this.console;
	}

	handleActions(action){
		console.log("Store received an action", action);

		switch(action.type){

			case "CREATE_ARTICLE":
				this.createArticle(action.article);
			break;
			case "GETALL_GAMES":
				console.log("Dispatch received " + action.type);
			break;
			case "RECEIVED_GAMES":
				this.receivedGames(action.data);
			break;
			case "CREATING_GAME":
				console.log("Dispatch received " + action.type);
			break;
			case "GAME_CREATED":
				this.addGame(action.game);
			break;

			case "DELETING_GAME":
				console.log("Dispatch received " + action.type);
			break;
			case "GAME_DELETED":
				this.removeGameById(action.id);
			break;

			case "UPDATING_GAME":
				console.log("Dispatch received " + action.type);
			break;
			case "GAME_UPDATED":
				this.updateGame(action.game);
			break;

			case "REMOVE_GAMES":
				this.removeGames(action.console);
			break;

		}

	}
}

const store = new Store;
dispatcher.register(store.handleActions.bind(store));
window.dispatcher = dispatcher;
export default store;