import dispatcher from "../dispatcher";

import * as AlertActions from "./AlertActions.js";

export function registerUser(user, history){
	dispatcher.dispatch({
		type: "REGISTERING_USER"
	});

    $.post( "http://localhost:58262/api/users", user, 
        function(data){
            if(data !== "Failed"){
                dispatcher.dispatch({type: "USER_REGISTERED", data: data});
                history.goBack();
                loginUser(data.Email, data.Password, history);
            }
            else{
             AlertActions.displayAlert({
                type:"alert-danger",
                text:"Not registered. Try again."
            });
         }
     });
}

export function loginUser(email, password, history){
    dispatcher.dispatch({
        type: "LOGINGIN_USER"
    });

    $.ajax({
        url: "http://localhost:58262/api/users/login",
        type: "POST", 
        data: JSON.stringify({
            "email":email,
            "password":password
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) {
            if(data !== "Failed"){
                dispatcher.dispatch({type: "USER_LOGEDIN", data: data});
                history.goBack();
            }
            else{
                AlertActions.displayAlert({
                    type:"alert-danger",
                    text:"Unsuccessful login. Try again."
                });
            }
        },
        error: function() {
        }
    });
}

export function logoutUser(){
    dispatcher.dispatch({
        type: "LOGOUT_USER"
    });
}

export function getUsers(){
    dispatcher.dispatch({
        type: "GET_USERS"
    });

    $.get("http://localhost:58262/api/users", function(data, status){
        dispatcher.dispatch({type: "RECEIVED_USERS", data: data});
    });
}

export function loadMoreUsers(number){
    dispatcher.dispatch({
        type: "GET_USERS"
    });

    $.get("http://localhost:58262/api/users/getnum/" + number, function(data, status){
        dispatcher.dispatch({type: "RECEIVED_USERS", data: data});
    });
}

export function deleteUser(id){
    dispatcher.dispatch({
        type: "DELETING_USER"
    });

    $.ajax({
        url: "http://localhost:58262/api/Users/" + id,
        type: "DELETE", 
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) {
            if(data === "Success"){
                dispatcher.dispatch({type: "USER_DELETED", id: id});
            }
        },
        error: function() {
        }
    });
}

export function updateUser(user){
    dispatcher.dispatch({
        type: "UPDATING_USER"
    });

    $.ajax({
        url: "http://localhost:58262/api/Users/" + user.Id,
        type: "PUT", 
        data: JSON.stringify(user),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) {
            if(data === "Success"){
                dispatcher.dispatch({type: "USER_UPDATED", user: user});
                AlertActions.displayAlert({
                    type:"alert-success",
                    text:"Your profile was updated successfully."
                });
            }
            else{
                AlertActions.displayAlert({
                    type:"alert-danger",
                    text:"Your profile wasn't updated. Try again."
                });
            }
        },
        error: function() {
        }
    });

}