import React from 'react';

import { Link } from "react-router";

export default class AdminPanelHome extends React.Component{

	
	render(){

		const style={
		textAlign:"center"
		}

		let styleh2={
			color: "#2196f3",
			marginTop:"0px"
		}

		return(
			<div>
			  	<h2 style={styleh2}>Admin Panel</h2>
			  	<hr/>
				<div className="row">
					<div className="col-sm-3 col-lg-3 col-md-3">

						<div className="thumbnail">
					        <img src="http://cdn.wccftech.com/wp-content/uploads/2017/01/breath-of-the-wild-limited-edition1.jpg" alt=""/>
					        <div className="caption">
					            <h3 style={style}>
					            	<Link to="admin/games" >Games</Link>
					            </h3>
					        </div>
				        </div>

					</div>
					<div className="col-sm-3 col-lg-3 col-md-3">
						<div className="thumbnail">
				        <img src="./public/users.png" alt=""/>
				        <div className="caption">
				            <h3 style={style}>
				            	<Link to="admin/users">Users</Link>
				            </h3>
				        </div>
			        </div>
					</div>
					<div className="col-sm-3 col-lg-3 col-md-3">
						<div className="thumbnail">
				        <img src="./public/orders.jpg" alt=""/>
				        <div className="caption">
				            <h3 style={style}>
				            	<Link to="admin/orders">Orders</Link>
				            </h3>
				        </div>
			        </div>
					</div>
					<div className="col-sm-3 col-lg-3 col-md-3">
						<div className="thumbnail">
				        <img src="./public/comments.jpg" alt=""/>
				        <div className="caption">
				            <h3 style={style}>
				            	<Link to="admin/comments">Comments</Link>
				            </h3>
				        </div>
			        </div>
					</div>
				 </div>
			</div>
		);
	}
}