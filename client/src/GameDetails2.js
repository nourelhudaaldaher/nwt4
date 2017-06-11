import React from 'react';

import { Link } from "react-router";

import Store from "./stores/Store";

import * as Actions from "./actions/Actions";

import CommentList from 'CommentList';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class GameDetails extends React.Component{
	constructor(props){
		super(props);
			
		this.state = {
				game: null
			}

			Actions.getGameById(this.props.params.id);

			this.getGame = this.getGame.bind(this);
			
		}

	componentWillMount(){

		Store.on("change", this.getGame);
	}

	componentWillUnmount(){

		Store.removeListener("change", this.getGame);
		Store.removeGames();

	}

	getGame(){

		this.setState({
			game: Store.getGameById(this.props.params.id)
		})

		console.log(this.state.game);
		
	}


	render(){

		console.log(this.state.game);

		const blueStyle = {
		    color: "#2196f3"
		};

		const imgStyle = {
			marginTop:40
		}

		const textStyle = {
			 textAlign: "justify"
		}

		const frameStyle = {
			 width: "100%",
			 height: "400px",
			 margin: "auto"
		}

		if(!this.state.game){
				return (<h2>Loading</h2>)
		}

		const imageUrl = (this.state.game.ImageUrl) ? this.state.game.ImageUrl : "";
		const price = (this.state.game.Price) ? this.state.game.Price : "";
		const name = (this.state.game.Name) ? this.state.game.Name : "";
		const description = (this.state.game.FullDescription) ? this.state.game.FullDescription : "";
		const console1 = (this.state.game.Console) ? this.state.game.Console : "";
		const developer = (this.state.game.Developer) ? this.state.game.Developer : "";
		const youtubeLink = (this.state.game.YoutubeLink) ? this.state.game.YoutubeLink.replace("watch?v=", "embed/") : "";

		

		return(

			<ReactCSSTransitionGroup
				transitionName="route"
				transitionEnterTimeout={600}
				transitionAppearTimeout={600}
				transitionLeaveTimeout={400}
				transitionAppear={true}
			>
			<div>
				<div className="row">

	                <div className="col-sm-6 col-lg-6 col-md-6">
	                	 <img className="img-responsive img-rounded image" style={imgStyle} src={imageUrl}/>
	                </div>


	                   

					<div className="col-sm-6 col-lg-6 col-md-6">

						<i><h5>{console1} - {developer}</h5></i>

						<hr style={blueStyle}/>

	                    <div className="caption-full">
	                        <h3 className="pull-right">${price}</h3>
	                        <h1 style={blueStyle}>{name}</h1>
	                        
	                       <p style={textStyle}>
	                       	{description}
	                       	</p>

	                    </div>
	                    <div className="ratings">
	                        <p className="pull-right">3 reviews</p>
	                        <p>
	                            <span className="glyphicon glyphicon-star"></span>
	                            <span className="glyphicon glyphicon-star"></span>
	                            <span className="glyphicon glyphicon-star"></span>
	                            <span className="glyphicon glyphicon-star"></span>
	                            <span className="glyphicon glyphicon-star-empty"></span>
	                            4.0 stars
	                        </p>
	                    </div>


	 				</div>

	            </div>

	            <hr/>

	            <div className="row">
		            <div className="col-sm-2 col-lg-2 col-md-2">
		            </div>
		            <div className="col-sm-8 col-lg-8 col-md-8">
						 <iframe style={frameStyle} src={youtubeLink}  allowFullScreen>
						 </iframe>
					 </div>	
					 <div className="col-sm-2 col-lg-2 col-md-2">
		            </div>
				</div>

	            <hr/>

	            <div className="row">
	            <div className="col-sm-2 col-lg-2 col-md-2">
	            </div>

	            	<div className="col-sm-8 col-lg-8 col-md-8">

	            		<CommentList gameId={this.props.params.id}/>

	            	</div>
	            
	            <div className="col-sm-2 col-lg-2 col-md-2">
	            </div> 
	            </div>


            </div>
            </ReactCSSTransitionGroup>
			
			);
	}
}