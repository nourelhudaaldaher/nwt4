import React from 'react';

import GameAdmin from './GameAdmin';

import * as Actions from "../actions/Actions";
import Store from "../stores/Store";

import SideFilter from "../SideFilter";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Link } from "react-router";

export default class GamesListAdmin extends React.Component{
	

	constructor(){
		super();
		this.getAllGames = this.getAllGames.bind(this);
		this.handleLoadMore = this.handleLoadMore.bind(this);
		
		this.state = {
			games: []
		}
		this.reloadGames();
	}

	handleLoadMore(){
		Actions.loadMoreGames(this.state.games.length + 5, 0);
	}		


	componentWillMount(){
		Store.on("change", this.getAllGames);
	}

	componentWillUnmount(){
		Store.removeListener("change", this.getAllGames);
		Store.removeGames();
	}

	getAllGames(){
		this.setState({
			games: Store.getAllGames()
		})	
	}

	reloadGames(){
		Actions.loadMoreGames(5, 0);
	}

	render(){

		const games = this.state.games;
			const Games = games.map((game) => {
			return <GameAdmin key={game.Id} Id={game.Id} imageUrl={game.ImageUrl} price={game.Price} 
			name={game.Name} description={game.ShortDescription} history={this.props.history}/> 
			});

		let style={
			color: "#2196f3",
			marginTop:"0px"
		}

		return(
				<div>
			  		<h2 style={style}>Games List  </h2> 
			  		<Link className="btn btn-primary" to="admin/creategame">Create New</Link>

			  		<hr/>

					<div className="row">

						<div className="col-md-12">

						<ReactCSSTransitionGroup
                        transitionName="item"
                        transitionEnterTimeout={600}
                        transitionLeaveTimeout={400}
                        >
				            {Games}
				        </ReactCSSTransitionGroup>
				        <button className="btn btn-default btn-block" onClick={this.handleLoadMore}>Load More</button>
						</div>
					</div>
				</div>

						);
	}
}