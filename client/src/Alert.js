import React from 'react';

import Store from "./stores/AlertStore";

export default class Alert extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			show: false,
			alert: {
				type:null,
				text:null
			}
		}
	}
	handleChange(e) {
		const title = e.target.value;
		this.props.changeTitle(title);
	}

	show(){
		return this.state.show;
	}

	componentWillMount(){
		Store.on("change", this.getAlert.bind(this));
	}

	componentWillUnmount(){
		Store.removeListener("change", this.getAlert.bind(this));
	}

	getAlert(){
		this.setState({
			show: true,
			alert: Store.getAlert()
		})	

		let _this = this;
		setTimeout(function(){
		  _this.setState({
		  	show: false
		  })
		},5000);

	}

	render(){
		let show = this.show();

		let type = this.state.alert.type;
		let alrtLeft = "";
		let alrtRight = this.state.alert.text;

		switch(type){
			case "alert-success":
				alrtLeft = "Success!";
			break;
			case "alert-info":
				alrtLeft = "Info!";
			break;
			case "alert-warning":
				alrtLeft = "Warning!";
			break;
			case "alert-success":
				alrtLeft = "danger!";
			break;
		}

		let text = this.state.alert.text ? this.state.alert.type : "Indicates a dangerous or potentially negative action.";

		if(show){
			return(	
				<div className={"alert alert-dismissable fade in " + type}>
					<a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
					<strong>{alrtLeft}</strong> {alrtRight}
				</div>		
			);
		}
		else{
			return (<div></div>);
		}
		
	}
}