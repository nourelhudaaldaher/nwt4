import React from 'react';

import { Link } from "react-router";

import * as Actions from "../actions/UserActions.js";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class LogIn extends React.Component{
	constructor(props){
		super(props);
		this.state = {
      		Email:"",
      		Password:""
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

    	Actions.loginUser(this.state.Email, this.state.Password, this.props.history);
  	}

	render(){

		return(
			<ReactCSSTransitionGroup
					transitionName="route"
					transitionEnterTimeout={600}
					transitionAppearTimeout={600}
					transitionLeaveTimeout={400}
					transitionAppear={true}
					>
				<div className="row">
					<div className="col-sm-3 col-lg-3 col-md-3">
					</div>
					<div className="col-sm-6 col-lg-6 col-md-6">
					 
						<div className="panel panel-default">
	  					<div className="panel-heading"><h5>Log In</h5></div>
	  						<div className="panel-body">
							<form onSubmit={this.handleSubmit}>
							<div className="form-group">
							    <label htmlFor="name">Email:</label>
							    <input type="email" className="form-control" id="Email" name="Email" value={this.state.Email}
	            				onChange={this.handleInputChange}/>
							</div>

							<div className="form-group">
							    <label htmlFor="name">Password:</label>
							    <input type="password" className="form-control" id="Password" name="Password" value={this.state.Password}
	            				onChange={this.handleInputChange}/>
							</div>

							  <button type="submit" className="btn btn-default">Submit</button>
							</form>
						</div>

					</div>

					<div style={{textAlign:"center", color:"rgb(33, 150, 243)"}}>
		                <Link to="register">Don't have an account? Register here.</Link>
		            </div>

					</div>


					<div className="col-sm-3 col-lg-3 col-md-3">
					</div>
				</div>
			</ReactCSSTransitionGroup>
			);
	}
}