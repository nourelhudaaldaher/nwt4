import dispatcher from "../dispatcher";

export function getAllComments(gameId){
	dispatcher.dispatch({
		type: "GETALL_COMMENTS"
	});

    $.get("http://localhost:58262/api/games/" + gameId +"/comments", function(data, status){
        dispatcher.dispatch({type: "RECEIVED_COMMENTS", data: data});
    });
}

export function loadMoreComments(number){
    dispatcher.dispatch({
        type: "GET_COMMENTS"
    });

    $.get("http://localhost:58262/api/comments/getnum/" + number, function(data, status){
        dispatcher.dispatch({type: "RECEIVED_COMMENTS", data: data});
    });
}

export function createComment(comment){
	dispatcher.dispatch({
		type: "CREATING_COMMENT"
	});

    $.post( "http://localhost:58262/api/comments", comment, 
        function(data){
         if(data === "Success"){
          dispatcher.dispatch({type: "COMMENT_CREATED", comment: comment});
      }
  });

}

export function getComments(){
    dispatcher.dispatch({
        type: "GET_COMENTS"
    });

    $.get("http://localhost:58262/api/comments", function(data, status){
        dispatcher.dispatch({type: "RECEIVED_COMMENTS", comments: data});
    });
}

export function deleteComment(id){
    dispatcher.dispatch({
        type: "DELETING_COMMENT"
    });

    $.ajax({
        url: "http://localhost:58262/api/Comments/" + id,
        type: "DELETE",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) {
            if(data === "Success"){
                dispatcher.dispatch({type: "COMMENT_DELETED", id: id});
            }
        },
        error: function() {
        }
    });
}