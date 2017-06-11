import React from 'react';

import { Link } from "react-router";

import * as Actions from "../actions/Actions.js";

import Store from "../stores/Store";

export default class UpdateGame extends React.Component{
	constructor(props){
		super(props);
		
    	this.state = {
    		game: null
    	};  	
		


		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getGame = this.getGame.bind(this);


		Actions.getGameById(this.props.params.id);

			


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




	handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    let game = this.state.game;
    game[name] = value;

    this.setState({
      game: game
    });

    console.log(this.state.game);

  	}

  	handleSubmit(event){
		console.log(this.state.game);
    	event.preventDefault();

    	Actions.updateGame(this.state.game, this.props.history);
  	}

	render(){

		//console.log(this.props);

		if(!this.state.game){
			return (<h1>Loading</h1>);
		}

		return(
			<row>
				<div className="col-sm-3 col-lg-3 col-md-3">
				</div>
				<div className="col-sm-6 col-lg-6 col-md-6">
				 <div style={{textAlign:"center"}}>
				 	<h2 style={{color:"rgb(33, 150, 243)"}}>Update Game</h2>
				 </div>
				 <hr/>
				 <div className="well">
						<form onSubmit={this.handleSubmit}>
						<div className="form-group">
						    <label htmlFor="name">Name of the Game:</label>
						    <input type="text" className="form-control" id="name" name="Name" value={this.state.game.Name}
            				onChange={this.handleInputChange}/>
						</div>

						<div className="form-group">
						    <label htmlFor="shortDescription">Short Description:</label>
						    <input type="text" className="form-control" id="shortDescription" name="ShortDescription" value={this.state.game.ShortDescription}
            				onChange={this.handleInputChange}/>
						</div>

						<div className="form-group">
						    <label htmlFor="fullDescription">Full Description:</label>
						    <input type="text" className="form-control" id="fullDescription" name="FullDescription"  value={this.state.game.FullDescription}
            				onChange={this.handleInputChange}/>
						</div>

						<div className="form-group">
						    <label htmlFor="price">Price:</label>
						    <input type="number" className="form-control" id="price" step="0.01" value={this.state.game.Price}
            				onChange={this.handleInputChange} name="Price"/>
						</div>

						<div className="form-group">
						    <label htmlFor="price">Console:</label>
						    <select className="form-control" id="Console" name="Console" onChange={this.handleInputChange}
						    	value={this.state.game.Console}>
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
						    <input type="text" className="form-control" id="Developer" name="Developer"  value={this.state.game.Developer}
            				onChange={this.handleInputChange}/>
						</div>

						<div className="form-group">
						    <label htmlFor="imageUrl">Image Url:</label>
						    <input type="text" className="form-control" id="imageUrl" value={this.state.game.ImageUrl}
            				onChange={this.handleInputChange} name="ImageUrl"/>
						</div>

						<div className="form-group">
						    <label htmlFor="fullDescription">Youtube Link:</label>
						    <input type="text" className="form-control" id="YoutubeLink" name="YoutubeLink"  value={this.state.game.YoutubeLink}
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
			</row>
			);
	}
}