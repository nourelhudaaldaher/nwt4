import React from 'react';

import { Link } from "react-router";

import * as Actions from "../actions/Actions.js";

export default class CreateGame extends React.Component{
	constructor(props){
		super(props);
		this.state = {
      		Name:"",
      		ShortDescription:"",
      		FullDescription:"",
      		Price:0,
      		ImageUrl:"",
      		Console:"Nintendo Switch",
      		Developer:"",
      		YoutubeLink:"",
      		WebsiteLink:""
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
		alert('Your favorite flavor is: ' + this.state.name);
		console.log(this.state);
    	event.preventDefault();

    	Actions.createGame(this.state);
  	}

	render(){

		let style={
			color: "#2196f3",
			marginTop:"0px"
		}

		return(
		<div>
			<h2 style={style}>CreateGame  </h2> 
			<div className="row">
				<div className="col-sm-3 col-lg-3 col-md-3">
				</div>
				<div className="col-sm-6 col-lg-6 col-md-6">
				 <div className="well">
						<form onSubmit={this.handleSubmit}>
						<div className="form-group">
						    <label htmlFor="name">Name of the Game:</label>
						    <input type="text" className="form-control" id="name" name="Name" value={this.state.Name}
            				onChange={this.handleInputChange}/>
						</div>

						<div className="form-group">
						    <label htmlFor="shortDescription">Short Description:</label>
						    <input type="text" className="form-control" id="shortDescription" name="ShortDescription" value={this.state.ShortDescription}
            				onChange={this.handleInputChange}/>
						</div>

						<div className="form-group">
						    <label htmlFor="fullDescription">Full Description:</label>
						    <input type="text" className="form-control" id="fullDescription" name="FullDescription"  value={this.state.FullDescription}
            				onChange={this.handleInputChange}/>
						</div>

						<div className="form-group">
						    <label htmlFor="price">Price:</label>
						    <input type="number" className="form-control" id="price" step="0.01" value={this.state.Price}
            				onChange={this.handleInputChange} name="Price"/>
						</div>

						<div className="form-group">
						    <label htmlFor="price">Console:</label>
						    <select className="form-control" id="Console" name="Console" onChange={this.handleInputChange}
						    	value={this.state.Console}>
						    	<option>Nintendo Switch</option>
						    	<option>Nintendo Wii U</option>
						    	<option>PS4</option>
						    	<option>PS3</option>
						    	<option>XBox One</option>
						    	<option>XBox 360</option>
						    </select>
						</div>

						<div className="form-group">
						    <label htmlFor="fullDescription">Developer:</label>
						    <input type="text" className="form-control" id="Developer" name="Developer"  value={this.state.Developer}
            				onChange={this.handleInputChange}/>
						</div>

						<div className="form-group">
						    <label htmlFor="imageUrl">Image Url:</label>
						    <input type="text" className="form-control" id="imageUrl" value={this.state.ImageUrl}
            				onChange={this.handleInputChange} name="ImageUrl"/>
						</div>

						<div className="form-group">
						    <label htmlFor="fullDescription">Youtube Link:</label>
						    <input type="text" className="form-control" id="YoutubeLink" name="YoutubeLink"  value={this.state.YoutubeLink}
            				onChange={this.handleInputChange}/>
						</div>

						<div className="form-group">
						    <label htmlFor="fullDescription">Website Link:</label>
						    <input type="text" className="form-control" id="WebsiteLink" name="WebsiteLink"  value={this.state.WebsiteLink}
            				onChange={this.handleInputChange}/>
						</div>


						  <button type="submit" className="btn btn-default">Submit</button>

						</form>
					</div>
				</div>
				<div className="col-sm-3 col-lg-3 col-md-3">
				</div>
			</div>
		</div>
			);
	}
}