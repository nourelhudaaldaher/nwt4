import React from 'react';

import GamesList from 'GamesList';

export default class Archives extends React.Component{
	render(){
		const { query } = this.props.location;
		const { params } = this.props;
		const { article } = params;
		const { date, filter } = query;
		return(

			<div className="row">
				<div className="col-sm-2 col-lg-2 col-md-2">
				</div>
				<div className="col-sm-8 col-lg-8 col-md-8">
							<div className="row carousel-holder">

			                    <div className="col-md-12">
			                        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
			                            <ol className="carousel-indicators">
			                                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
			                                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
			                                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
			                            </ol>
			                            <div className="carousel-inner">
			                                <div className="item active">
			                                    <img className="slide-image" src="./public/front-page-1.jpg" alt=""/>
			                                </div>
			                                <div className="item">
			                                    <img className="slide-image" src="./public/front-page-2.jpg" alt=""/>
			                                </div>
			                                <div className="item">
			                                    <img className="slide-image" src="./public/front-page-3.jpg" alt=""/>
			                                </div>
			                            </div>
			                            <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
			                                <span className="glyphicon glyphicon-chevron-left"></span>
			                            </a>
			                            <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
			                                <span className="glyphicon glyphicon-chevron-right"></span>
			                            </a>
			                        </div>
			                    </div>

			                </div>

			                <GamesList sidebar={false}/>
				</div>
			    <div className="col-sm-2 col-lg-2 col-md-2">
				</div>
			</div>
		);
	}
}