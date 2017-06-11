import React from 'react';

import UserStore from './stores/UserStore';

export default class AdminPanel extends React.Component{

	render(){
		let user = UserStore.getUser();

		return(
			(user && user.FirstName === "admin" && user.LastName === "admin")
			?
				<div>
					
					{this.props.children}

				</div>
			:
				<div style={{textAlign:"center"}}>
					
					<h1 style={{color:"rgb(33, 150, 243)"}}>You must be logged in as Admin to access this pages.</h1>

				</div>
		);
		
	}
}