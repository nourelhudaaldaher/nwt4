import React from 'react';

import moment from 'moment';

export default class Archives extends React.Component{
    render(){
        const  name  = (this.props.name) ? this.props.name : "Uknown";
        const  date  = (this.props.date) ? this.props.date : new Date();
        const  content  = (this.props.content) ? this.props.content : "Uknown";
        const  score  = (this.props.score) ? this.props.score : 5;

        let stars = [];

        var i = 0;
        for(i = 0; i<score; i++){
            stars.push(<span className="glyphicon glyphicon-star"></span>);
        }
        while(i < 5){
            stars.push(<span className="glyphicon glyphicon-star-empty"></span>);
            ++i;
        }
        


        return(
            <div>
            <hr/>
                <div className="row">
                            <div className="col-md-12">
                                {stars} | {name}
                                <span className="pull-right">{moment(date).format('MMMM Do YYYY, h:mm:ss a')}</span>
                                <p>{content}</p>
                            </div>
                </div>
            </div>
        );
    }
}


