import { EventEmitter } from "events";

import dispatcher from "../dispatcher"

class CommentsStore extends EventEmitter
{
	constructor(){
		super();

		this.comments = [];
	}


	getAllComments(){
		return this.comments;
	}


	receivedComments(comments){
		this.comments.push.apply(this.comments, comments);

		this.emit("change");
	}

	addComment(comment){
		this.comments.unshift(comment);

		this.emit("change");
	}

	removeCommentById(id){
		this.comments = $.grep(this.comments, function(el, idx) {return el.Id == id}, true);
		this.emit("change");		
	}

	removeComments(){
		this.comments = [];
	}

	handleActions(action){
		console.log("Comment store received an action", action);

		switch(action.type){

			case "GETALL_COMMENTS":{
				console.log("Dispatch received " + action.type);
			}
			case "RECEIVED_COMMENTS":{
				this.receivedComments(action.data);
			}

			case "GET_COMMENTS":
				console.log("GET_COMMENTS dispatched");
			break;



			case "CREATING_COMMENT":
				console.log("Dispatch received " + action.type);
			break;
			case "COMMENT_CREATED":
				this.addComment(action.comment);
			break;

			case "DELETING_COMMENT":
				console.log("Dispatch received " + action.type);
			break;
			case "COMMENT_DELETED":
				this.removeCommentById(action.id);
			break;
		}
	}
}

const store = new CommentsStore;
dispatcher.register(store.handleActions.bind(store));
export default store;

