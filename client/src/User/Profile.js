import React from 'react';

import { Link } from "react-router";

import * as Actions from "../actions/UserActions.js";

import Store from "../stores/UserStore";

export default class UpdateProfile extends React.Component{
	constructor(props){
		super(props);
		
		const user = Store.getUser();
    	

    	this.state = {
    		Id:user.Id,
      		FirstName:user.FirstName,
      		LastName:user.LastName,
      		Email:user.Email,
      		Password:user.Password
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
		console.log(this.state);
    	event.preventDefault();

    	Actions.updateUser(this.state);
  	}

	render(){

		console.log(this.props);
		return(
			<row>
				<div className="col-sm-3 col-lg-3 col-md-3">
				</div>
				<div className="col-sm-6 col-lg-6 col-md-6">
				 <div style={{textAlign:"center"}}>
				 	<h2 style={{color:"rgb(33, 150, 243)"}}>Update Your Profile</h2>
				 </div>
				 <hr/>
				 <div className="well">
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

							<div className="form-group">
							    <label htmlFor="name">FirstName:</label>
							    <input type="text" className="form-control" id="FirstName" name="FirstName" value={this.state.FirstName}
	            				onChange={this.handleInputChange}/>
							</div>

							<div className="form-group">
							    <label htmlFor="name">LastName:</label>
							    <input type="text" className="form-control" id="LastName" name="LastName" value={this.state.LastName}
	            				onChange={this.handleInputChange}/>
							</div>

						  <button type="submit" className="btn btn-default">Update</button>

						</form>
					</div>
				</div>
				<div className="col-sm-3 col-lg-3 col-md-3">
				</div>
			</row>
			);
	}
}