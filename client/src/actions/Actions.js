import dispatcher from "../dispatcher";

import * as AlertActions from "./AlertActions.js";

export function getAllGames(){
	dispatcher.dispatch({
		type: "GETALL_GAMES"
	});

	$.get("http://localhost:58262/api/games", function(data, status){
		dispatcher.dispatch({type: "RECEIVED_GAMES", games: data});
	});
}

export function getGameById(id){
	dispatcher.dispatch({
		type: "GETALL_GAMES"
	});

	$.get("http://localhost:58262/api/games/" + id, function(data, status){
		var games = [data];
		dispatcher.dispatch({type: "RECEIVED_GAMES", data: games});
	});
}

export function createGame(game){
	dispatcher.dispatch({
		type: "CREATING_GAME"
	});

	$.post( "http://localhost:58262/api/games", game, 
		function(data){
			dispatcher.dispatch({
				type: "GAME_CREATED",
				data: data
			});
			if(data === "Success"){

				AlertActions.displayAlert({
					type:"alert-success",
					text:"Game was created successfully."
				});
			}
			else{
				AlertActions.displayAlert({
					type:"alert-danger",
					text:"Game was not created. Try again."
				});
			}
		});

}

export function loadMoreGames(number, console){
	dispatcher.dispatch({
		type: "GET_GAMES"
	});

	$.get("http://localhost:58262/api/games/getnum/" + number + "," + console, function(data, status){
		dispatcher.dispatch({type: "RECEIVED_GAMES", data: data});
	});
}

export function deleteGame(id){
	dispatcher.dispatch({
		type: "DELETING_GAME"
	});

	$.ajax({
		url: "http://localhost:58262/api/Games/" + id,
		type: "DELETE",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function(data) {
			if(data === "Success"){
				dispatcher.dispatch({type: "GAME_DELETED", id: id});
			}
		},
		error: function() {
		}
	});
}

export function updateGame(game, history){
	dispatcher.dispatch({
		type: "UPDATING_GAME"
	});

	$.ajax({
		url: "http://localhost:58262/api/Games/" + game.Id,
		type: "PUT",
		data: JSON.stringify(game),
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function(data) {
			if(data === "Success"){
				dispatcher.dispatch({type: "GAME_UPDATED", game: game});

				AlertActions.displayAlert({
					type:"alert-success",
					text:"Game was updated successfully."
				});

				history.replaceState(null, "admin/games");

			}
			else{
				AlertActions.displayAlert({
					type:"alert-danger",
					text:"Game was not updated. Try again.."
				});
			}
		},
		error: function() {
		}
	});

}

export function filterByConsole(selected){

	dispatcher.dispatch({
		type: "REMOVE_GAMES",
		console: selected
	});

	loadMoreGames(5, selected);
}