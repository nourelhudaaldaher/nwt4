import React from 'react';

import Game from 'Game';

import * as Actions from "./actions/Actions";
import Store from "./stores/Store";

import SideFilter from "./SideFilter";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Link from 'react-router';

import GamesRow from './GamesRow';

export default class GamesList extends React.Component{
	

	constructor(props){
		super(props);
		//this.getArticles = this.getArticles.bind(this);
		this.getAllGames = this.getAllGames.bind(this);
		this.getGames = this.getGames.bind(this);
		this.handleLoadMore = this.handleLoadMore.bind(this);
		
		this.state = {
			games: []
		}
		this.reloadGames();


	}
		
	componentWillMount(){
		let sidebar = true;
		if(this.props.sidebar !== undefined){
			sidebar = false;
		}
		//Store.on("change", this.getArticles);
		(sidebar)
		?
		Store.on("change", this.getAllGames)
		:
		Store.on("change", this.getGames)
	}

	componentWillUnmount(){
		let sidebar = true;
		if(this.props.sidebar !== undefined){
			sidebar = false;
		}
		//Store.removeListener("change", this.getArticles);
		(sidebar)
		?
		Store.removeListener("change", this.getAllGames)
		:
		Store.removeListener("change", this.getGames)

		Store.removeGames();
	}

	getAllGames(){
		this.setState({
			games: Store.getAllGames()
		})	
	}

	getGames(){
		this.setState({
			games: Store.getGames(6)
		})	
	}

	reloadGames(){
		Actions.loadMoreGames(5, Store.getConsole());
	}

	handleLoadMore(){
		Actions.loadMoreGames(this.state.games.length + 5, Store.getConsole());
	}

	render(){

		let sidebar = true;
		if(this.props.sidebar !== undefined){
			sidebar = false;
		}
		console.log(sidebar);
		const games = this.state.games;
		//let Games = [];
		let chunkarray = [];

		var i,j,temparray,chunk = 3;
		for (i=0,j=this.state.games.length; i<j; i+=chunk) {
		    temparray = this.state.games.slice(i,i+chunk);
		    chunkarray.push(temparray);
		}

		let GamesRows = chunkarray.map((item, i) => {
			return <GamesRow key={i} games={item} />
		})



		let h2Style = {
			color: "#2196f3"
		}

		//console.log(Games);

		return(
			<div>


				<div className="row">
					{(sidebar) ? <SideFilter /> : ""}					

					<div className={(sidebar) ? "col-md-9" : "col-md-12"} >			                
						{(!sidebar) ? <div style={{textAlign: "center"}}><h2 style={h2Style}>Latest Releases:</h2><hr/></div> : ""}

						<ReactCSSTransitionGroup
                        transitionName="item"
                        transitionEnterTimeout={600}
                        transitionLeaveTimeout={400}
                        >
			        		{GamesRows}

			        		{(sidebar) ? <button className="btn btn-default btn-block" 
			        		onClick={this.handleLoadMore}>Load More</button> : ""}

			        	</ReactCSSTransitionGroup>
					</div>
				</div>
			</div>
			);
	}
}