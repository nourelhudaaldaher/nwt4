import React from 'react';

export default class Footer extends React.Component{
	render(){

		const style ={
			textAlign: "center"
		}
		return(
			 <div className="container" style={style}>
		        <hr/>
		        <footer>
		            <div className="row" style={style}>
		                <div className="col-lg-12" style={style}>
		                    <p style={style}>Copyright &copy; WebAPI Games 2017</p>
		                </div>
		            </div>
		        </footer>
		    </div>
			);
	}
} 