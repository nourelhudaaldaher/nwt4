import React from 'react';

import { Link } from "react-router";

import * as Actions from "../actions/CommentsActions.js";

import Store from "../stores/CommentsStore";

import CommentRow from "./CommentRow";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class OrdersList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
      		comments: []
    	};

    	this.getComments = this.getComments.bind(this);
    	this.handleLoadMore = this.handleLoadMore.bind(this);

    	this.loadComments();

	}

	handleLoadMore(){
		Actions.loadMoreComments(this.state.comments.length + 5);
	}


	componentWillMount(){
		Store.on("change", this.getComments);
	}

	componentWillUnmount(){
		Store.removeListener("change", this.getComments);
		Store.removeComments();
	}


  	
	loadComments(){
		Actions.loadMoreComments(5);	
	}

	getComments(){
		this.setState({
			comments: Store.getAllComments()
		})
		
	}

	render(){
		const Comments = this.state.comments.map((comment) => {
			return <CommentRow key={comment.Id} Id={comment.Id} Name={comment.Name} Content={comment.Content}
						Score={comment.Score}/>
		});

		let style={
			color: "#2196f3",
			marginTop:"0px"
		}

		return(
			<div>
			  <h2 style={style}>Comments List</h2>
			  <table className="table table-hover">
			    <thead>
			      <tr>
				    <th>
				  		Id
				  	</th>
				  	<th>
				  		Date
				  	</th>

					<th>
				  		Name
				  	</th>

				  	<th>
				  		Content
				  	</th>
				  	<th>
				  		Score
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
			      {Comments}
			    </ReactCSSTransitionGroup>
			  </table>
			  <button className="btn btn-default" onClick={this.handleLoadMore}>Load More</button>
			</div>
			);
	}
}