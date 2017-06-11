import dispatcher from "../dispatcher";

import * as AlertActions from "./AlertActions.js";

export function createOrder(order){
	dispatcher.dispatch({
		type: "CREATING_ORDER"
	});

    if(order.Games.length === 0){
        AlertActions.displayAlert({
            type:"alert-danger",
            text:"Add at least one game in shopping cart and try again."
        });
        return;
    }

    

    $.post( "http://localhost:58262/api/orders", order, 
        function(data){
            if(data == "Success"){
                dispatcher.dispatch({type: "ORDER_CREATED", data: data});

                AlertActions.displayAlert({
                    type:"alert-success",
                    text:"Order was created. Thank you."
                });
            }
            else{
                AlertActions.displayAlert({
                    type:"alert-danger",
                    text:"Order was not created. Try again."
                });
            }
        });
}


export function getOrders(){
    dispatcher.dispatch({
        type: "GET_ORDERS"
    });

    $.get("http://localhost:58262/api/orders", function(data, status){
        dispatcher.dispatch({type: "RECEIVED_ORDERS", data: data});
    });
}

export function loadMoreOrders(number){
    dispatcher.dispatch({
        type: "GET_ORDERS"
    });

    $.get("http://localhost:58262/api/orders/getnum/" + number, function(data, status){
        dispatcher.dispatch({type: "RECEIVED_ORDERS", data: data});
    });
}

export function deleteOrder(id){
    dispatcher.dispatch({
        type: "DELETING_ORDER"
    });

    $.ajax({
        url: "http://localhost:58262/api/Orders/" + id,
        type: "DELETE", 
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) {
            if(data === "Success"){
                dispatcher.dispatch({type: "ORDER_DELETED", id: id});
            }
        },
        error: function() {
        }
    });
}

export function updateOrder(order){
    dispatcher.dispatch({
        type: "UPDATING_ORDER"
    });

    $.ajax({
        url: "http://localhost:58262/api/Orders/" + order.Id,
        type: "PUT", 
        data: JSON.stringify(order),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data) {
            if(data === "Success"){
                dispatcher.dispatch({type: "ORDER_UPDATED", order: order});
            }
            else{
                AlertActions.displayAlert({
                    type:"alert-danger",
                    text:"Order was not updated. Try again."
                });
            }
        },
        error: function() {
        }
    });

}