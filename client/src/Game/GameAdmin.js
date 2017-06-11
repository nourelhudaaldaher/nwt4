import React from 'react';

import { Link } from "react-router";

import * as Actions from "../actions/Actions.js";

export default class GameAdmin extends React.Component{
	constructor(props){
		super(props);

		this.onUpdateClick = this.onUpdateClick.bind(this);
		this.onDeleteClick = this.onDeleteClick.bind(this);
	}

	onUpdateClick(event){

	}

	onDeleteClick(event){
		Actions.deleteGame(this.props.Id);
	}

	render(){
		const imageUrl = this.props.imageUrl;
		const price = this.props.price;
		const name = this.props.name;
		const description = this.props.description;

		console.log(this.props);
		return(
			<div className="col-sm-3 col-lg-3 col-md-3">
			    <div className="thumbnail">
			        <img src={imageUrl} alt=""/>
			        <div className="caption">
			            <h4 className="pull-right">{price}</h4>
			            <h4>
			            	<a href="#"></a>
			            	<Link to={"games/" + this.props.Id}>{name}</Link>
			            </h4>
			            <p>{description}</p>
			        </div>
			        <div className="ratings">
			            <p className="pull-right">15 reviews</p>
			                <p>
			                    <span className="glyphicon glyphicon-star"></span>
			                    <span className="glyphicon glyphicon-star"></span>
			                    <span className="glyphicon glyphicon-star"></span>
			                    <span className="glyphicon glyphicon-star"></span>
			                    <span className="glyphicon glyphicon-star"></span>
			                </p>
			            </div>
			            <div className="row">
			            	<div className="col-sm-6 col-lg-6 col-md-6">
				             	<Link className="btn btn-success btn-block" to={"admin/updategame/" + this.props.Id}>Update</Link>
				             </div>
				             <div className="col-sm-6 col-lg-6 col-md-6">				             	
				             	<button className="btn btn-danger btn-block" onClick={this.onDeleteClick}>Delete</button>		
				             </div>
			            </div>	             
			        </div>
			   </div>
			);
	}
}