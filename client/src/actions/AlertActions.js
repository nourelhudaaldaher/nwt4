import dispatcher from "../dispatcher";

export function displayAlert(alert){
	dispatcher.dispatch({
		type: "DISPLAY_ALERT",
		data: alert
	});

}