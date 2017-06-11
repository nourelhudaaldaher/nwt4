import dispatcher from "../dispatcher";

export function addGame(game){
	dispatcher.dispatch({
		type: "ADD_GAME",
		game: game
	});

}

export function removeGame(game){
	dispatcher.dispatch({
		type: "REMOVE_GAME",
		game: game
	});

}