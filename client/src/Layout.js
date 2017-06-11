import React from 'react';

import { Link } from "react-router";

import Nav from 'Nav';
import Footer from 'Footer';

import ShoppingCart from 'ShoppingCart';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Alert from './Alert';

export default class Layout extends React.Component{

	navigate(){
		this.props.history.replaceState(null, "/");
	}

	render(){
		const style = {
		marginTop: "20px"
			}

		const {history} = this.props;

		return(
			<div>
				<Nav location={location} />

				<Alert />

			    <div className="container" style={style} >
			        <div className="row">

			        {this.props.children}
			        
			        </div>
			    </div>

			    <Footer/>

			    <ShoppingCart modalId="cartModal" />
			</div>
			);
	}
}