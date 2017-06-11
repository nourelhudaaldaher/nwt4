import React from 'react';

import { Link } from "react-router";

import * as Actions from "../actions/UserActions.js";

import Store from "../stores/UserStore";

import UserRow from "./UserRow";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class UserList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
      		users: []
    	};

    	this.getUsers = this.getUsers.bind(this);
    	this.handleLoadMore = this.handleLoadMore.bind(this);

    	this.loadUsers();

	}

	componentWillMount(){
		Store.on("change", this.getUsers);
	}

	componentWillUnmount(){
		Store.removeListener("change", this.getUsers);
		Store.removeUsers();
	}


  	
	loadUsers(){
		Actions.loadMoreUsers(5);
	}

	getUsers(){
		this.setState({
			users: Store.getUsers()
		})
		
	}

	handleLoadMore(){
		console.log(this.state.users.length + 5);
		Actions.loadMoreUsers(this.state.users.length + 5);
	}

	render(){

		const Users = this.state.users.map((user) => {
			return <UserRow key={user.Id} Id={user.Id} FirstName={user.FirstName} LastName={user.LastName}
					Password={user.Password} Email={user.Email} />
		});

		let style={
			color: "#2196f3",
			marginTop:"0px"
		}

		return(
			<div>
			  <h2 style={style}>Users List</h2>			
			  <table className="table table-hover">
			    <thead>
			      <tr>
				    <th>
				  		Id
				  	</th>
				  	<th>
				  		Email
				  	</th>

					<th>
				  		Password
				  	</th>

					<th>
				  		FirstName
				  	</th>
					<th>
				  		LastName
				  	</th>
				  	<th>
				  	</th>
			      </tr>
			    </thead>
			    <ReactCSSTransitionGroup
				    component="tbody"
	                transitionName="item"
	                transitionEnterTimeout={600}
	                transitionLeaveTimeout={400}
	                >
			      {Users}
			    </ReactCSSTransitionGroup>
			  </table>
			  <button className="btn btn-default" onClick={this.handleLoadMore}>Load More</button>
			</div>
			);
	}
}