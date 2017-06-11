import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from 'Layout';
import GamesList from 'GamesList';
import About from 'About';
import Home from 'Home';

import GameDetails2 from 'GameDetails2';

import CreateGame from './Game/CreateGame';
import AdminPanel from './AdminPanel';

import GamesListAdmin from './Game/GamesListAdmin';
import UpdateGame from './Game/UpdateGame';

import NotFound from 'NotFound';

import LogIn from './User/LogIn';
import Register from './User/Register';
import UserList from './User/UserList';

import OrdersList from './Order/OrdersList';
import OrderDetails from './Order/OrderDetails';

import AdminPanelHome from './AdminPanelHome';

import Contact from './Contact';

import CommentsList from './Comment/CommentsList';

import Profile from './User/Profile';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute  component={Home}></IndexRoute>
			<Route path="games" activeClassName="test" name="games" component={GamesList}></Route>
			<Route path="games/:id" activeClassName="test" name="gamedetails" component={GameDetails2}></Route>
			<Route path="about" name="about" component={About}></Route>
			<Route path="contact" name="contact" component={Contact}></Route>

			<Route path="profile" name="profile" component={Profile}></Route>

			<Route path="admin" name="adminpanel" component={AdminPanel}>
				<IndexRoute component={AdminPanelHome}></IndexRoute>
				<Route path="creategame" name="creategame" component={CreateGame}></Route>
				<Route path="games" name="gamesadmin" component={GamesListAdmin}></Route>
				<Route path="updategame/:id" name="updategame" component={UpdateGame}></Route>

				<Route path="users" name="users" component={UserList}></Route>

				<Route path="orders" name="orders" component={OrdersList}></Route>
				<Route path="orders/:id" name="orderdetails" component={OrderDetails}></Route>

				<Route path="comments" name="comments" component={CommentsList}></Route>

				<Route path='*' component={NotFound} />
			</Route>

			<Route path="login" activeClassName="test" name="login" component={LogIn}></Route>

			<Route path="register" activeClassName="test" name="register" component={Register}></Route>
			
			
			<Route path='*' component={NotFound} />
		</Route>
	</Router>, 
	document.getElementById('app'));