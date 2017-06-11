import React from 'react';

import {IndexLink, Link } from 'react-router';

import ShoppingCartStore from "./stores/ShoppingCartStore";

import  UserStore from "./stores/UserStore";

import * as UserActions from "./actions/UserActions"

export default class Nav extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			numberOfItems : 0,
			user: null
		};

		this.getNumberOfGames = this.getNumberOfGames.bind(this);
		this.loadUser = this.loadUser.bind(this);
		this.logoutUser = this.logoutUser.bind(this);

	}

	logoutUser(){
		UserActions.logoutUser();
	}

	loadUser(){
		this.setState({
			user: UserStore.getUser()
		});
	}

	getNumberOfGames(){
		this.setState({
			numberOfItems: ShoppingCartStore.getNumberOfGames()
		});		
	}

	componentWillMount(){
    	UserStore.on("change", this.loadUser);
    	ShoppingCartStore.on("change", this.getNumberOfGames);
  	}

  	componentWillUnmount(){
    	ShoppingCartStore.removeListener("change", this.getNumberOfGames);
    	UserStore.removeListener("change", this.loadUser);
  	}

	render(){
		return(			
		    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
		        <div className="container">
		        	<div>
		        		<ul className="nav navbar-nav pull-right">
		        			{
		        				(this.state.user !== null) 
		        				?
		        				<li>
		                        	<Link to="profile">Hi, {this.state.user.FirstName}</Link>
		                    	</li>
		                    	:
		                    	""
		                    }
		                    {
		        				(this.state.user !== null) 
		        				?
		        				<li>
		                        	<a onClick={this.logoutUser} style={{cursor:"pointer"}}>Log Out</a>
		                    	</li>
		        				:
		        				<li>
		                        	<Link to="login">Log In</Link>
		                    	</li>
		                    }
		        			
		                    
		                     <li>  
		                        <a href="#" data-toggle="modal" data-target="#cartModal"> <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>({this.state.numberOfItems})</a>
		                    </li>
		                </ul>
		        	</div>
		            <div className="navbar-header">
		                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
		                    <span className="sr-only">Toggle navigation</span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                </button>
		                <a className="navbar-brand" href="#">WebAPI Games</a>
		            </div>
		            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		                <ul className="nav navbar-nav">
		                    <li>
		                        <IndexLink to="/">Home</IndexLink>
		                    </li>
		                    <li>
		                        <Link to="games">Games</Link>
		                    </li>
		                     <li>
		                        <Link to="about">About Us</Link>
		                    </li>
		                    <li className="pull-right">
		                        <Link to="contact">Contact</Link>
		                    </li>
		                </ul>
		            </div>
		        </div>
		    </nav>
			);
	}
}