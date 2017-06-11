import React from 'react';

import Game from 'Game';

export default class GamesList extends React.Component{

	constructor(props){
		super(props);
	}
		

	render(){

		const games = this.props.games;
			const Games = games.map((game, i) => {
			return <Game key={game.Id} Id={game.Id} imageUrl={game.ImageUrl} price={game.Price} 
			name={game.Name} shortDescription={game.ShortDescription} fullDescription={game.FullDescription}
			console={game.Console} developer={game.Developer} youtubeLink={game.YoutubeLink} websiteLink={game.WebsiteLink}/> 
			});


		return(
			<div className="row">
				{Games}				
			</div>
			);
	}
}