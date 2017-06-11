import React from 'react';

import { Link } from "react-router";

import * as Actions from "./actions/ShoppingCartActions";

export default class Game extends React.Component{

constructor(props){
	super(props);

	this.state ={
		game: {
			Id: this.props.Id,
			imageUrl: this.props.imageUrl,
			Name: this.props.name,
			ShortDescription: this.props.shortDescription,
			FullDescription: this.props.fullDescription,
			Console: this.props.console,
			Developer: this.props.developer,
			YoutubeLink: this.props.youtubeLink,
			WebsiteLink: this.props.websiteLink,
			Price: this.props.price
		},
		inCart: false
	};

	this.onAddToCartClick = this.onAddToCartClick.bind(this);
	this.onRemoveFromCartClick = this.onRemoveFromCartClick.bind(this);
}


onAddToCartClick(event){
	Actions.addGame(this.state.game);
	this.setState({
		inCart: true
	})
}

onRemoveFromCartClick(event){
	Actions.removeGame(this.state.game);
	this.setState({
		inCart: false
	})
}

	render(){
		const imageUrl = this.props.imageUrl;
		const price = this.props.price;
		const name = this.props.name;
		const description = this.props.shortDescription;

		const style = {
			marginBottom: "0px"
		}

		return(
			<div className="col-sm-4 col-lg-4 col-md-4">
			    <div className="thumbnail">
			        <img className="img-responsive" src={imageUrl} alt=""/>
			        <div className="caption">
			        <h5 className="pull-right">${price}</h5>
			        <h5 style={style}>
			            	<Link to={"games/" + this.props.Id}>{name}</Link>
			        </h5>
			            
			            
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
			            {!this.state.inCart 
			            	?
			            	<button className="btn btn-primary btn-block" onClick={this.onAddToCartClick}>Add to Cart</button>	 
			            	: 
			            	<button className="btn btn-danger btn-block" onClick={this.onRemoveFromCartClick}>Remove from Cart</button>	 
			            	
			            }
			            
			        </div>
			   </div>
			);
	}
}