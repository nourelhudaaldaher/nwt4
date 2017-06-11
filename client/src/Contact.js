import React from 'react';

import { Link } from "react-router";

import * as Actions from "./actions/AlertActions.js";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Contact extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			Name:"",
      		Email:"",
      		Text:""
    	};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  	}

  	handleSubmit(event){
    	event.preventDefault();
    	let text = this.state.Name + ", your message was successfully sent. Thank you.";

    	Actions.displayAlert({
    			type:"alert-success",
    			text: text
    		});
  	}

	render(){

		let style = {
			color: "rgb(0, 188, 212)"
		}

		return(
			<ReactCSSTransitionGroup
					transitionName="route"
					transitionEnterTimeout={600}
					transitionAppearTimeout={600}
					transitionLeaveTimeout={400}
					transitionAppear={true}
					>
				<div className="row">
					<div className="col-sm-8 col-lg-8 col-md-8">
					 
						<div className="panel panel-default">
	  					<div className="panel-heading">
	  					<h5>Send Us a Message</h5></div>
	  						<div className="panel-body">

	  						<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
				      		aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h5>
				      		
				      		<br/>

							<form onSubmit={this.handleSubmit}>

							<div className="row">
								<div className="col-sm-6 col-lg-6 col-md-6">

									<div className="form-group">
									    <label htmlFor="name">Name</label>
									    <input type="text" className="form-control" id="Name" name="Name" value={this.state.Name}
			            				onChange={this.handleInputChange}/>
									</div>

								</div>

								<div className="col-sm-6 col-lg-6 col-md-6">

									<div className="form-group">
									    <label htmlFor="name">Email:</label>
									    <input type="email" className="form-control" id="Email" name="Email" value={this.state.Email}
			            				onChange={this.handleInputChange}/>
									</div>

								</div>
							</div>

							<div className="form-group">
						      <label htmlFor="Text">Message:</label>
						      <textarea className="form-control" rows="5" id="Text" name="Text" value={this.state.Text}
			            				onChange={this.handleInputChange}></textarea>
						    </div>

							  <button type="submit" className="btn btn-default">Submit</button>

							</form>


						</div>

					</div>

					</div>


					<div className="col-sm-4 col-lg-4 col-md-4">

						<div className="panel panel-default">
	  					<div className="panel-heading">
	  						<h5>Contact</h5>
	  					</div>
	  						<div className="panel-body">
	  							<h4 style={style}>Email</h4>
	  							<h5>email@email.com</h5>
	  							<h4 style={style}>Telephone</h4>
	  							<h5>+123 456 789</h5>
	  							<h4 style={style}>Skype</h4>
	  							<h5>skype.name</h5>
	  							<h4 style={style}>Address</h4>
	  							<h5>Street address</h5>
	  						</div>
	  					</div>

					</div>
				</div>
			</ReactCSSTransitionGroup>
			);
	}
}