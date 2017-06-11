import React from 'react';

import { Link } from "react-router";

import * as Actions from "../actions/CommentsActions.js";

export default class CreateGame extends React.Component{
	constructor(props){
		super(props);
		this.state = {
      		Name:"",
      		Content:"",
      		Score:0,
      		GameId: this.props.gameId
    	};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTextareaChange = this.handleTextareaChange.bind(this);
	}

	handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  	}

  	handleTextareaChange(event) {
    	this.setState({Content: event.target.value});
  	}

  	handleSubmit(event){
    	event.preventDefault();

    	Actions.createComment(this.state);
  	}

	render(){

		return(
			<div className="row">
				<div className="col-sm-12 col-lg-12 col-md-12">
				 <h3>Add a Review</h3>
				 <hr/>
				 <div className="well">
						<form onSubmit={this.handleSubmit}>

						<div className="row">
							<div className="col-sm-6 col-lg-6 col-md-6">
								<div className="form-group">
								    <label htmlFor="name">Name:</label>
								    <input type="text" className="form-control" id="name" name="Name" value={this.state.Name}
		            				onChange={this.handleInputChange}/>
								</div>
							</div>

							<div className="col-sm-6 col-lg-6 col-md-6">
								<div className="form-group">
								    <label htmlFor="price">Score:</label>
								    <input type="number" className="form-control" id="Score" name="Score" step="1"
								    		min="1" max="5" value={this.state.Score}
		            				onChange={this.handleInputChange}/>
								</div>
							</div>
						</div>

						<div className="form-group">
						    <label htmlFor="shortDescription">Content:</label>
						    <textarea className="form-control" id="shortDescription" name="ShortDescription" value={this.state.Content}
            				onChange={this.handleTextareaChange}/>
						</div>

						

						  <button type="submit" className="btn btn-primary pull-right">Submit</button>

						</form>
					</div>
				</div>
			</div>
			);
	}
}