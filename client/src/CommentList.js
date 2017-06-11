import React from 'react';

import Comment from 'Comment';

import * as Actions from './actions/CommentsActions';
import CommentsStore from './stores/CommentsStore';

import CreateComment from './Comment/CreateComment';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class CommentList extends React.Component{
        constructor(props){
        super(props);
        this.getAllComments = this.getAllComments.bind(this);
        
        this.state = {
            comments: []
        }
        this.reloadComments();
    }
        
    componentWillMount(){
         CommentsStore.on("change", this.getAllComments);
    }

    componentWillUnmount(){
         CommentsStore.removeListener("change", this.getAllComments);
         CommentsStore.removeComments();
    }

    getAllComments(){
        this.setState({
            comments:  CommentsStore.getAllComments()
        })  
    }

    reloadComments(){
        Actions.getAllComments(this.props.gameId);
    }

    render(){

            console.log(this.state.comments);

            const comments = this.state.comments;
            const Comments = comments.map((comment) => {
            return <Comment key={comment.Id} id={comment.Id} date={comment.Date} content={comment.Content} 
            name={comment.Name} score={comment.Score} />
            });

        return(         
            <div className="panel panel-default">
                <div className="panel-body">
                    <CreateComment gameId={this.props.gameId}/>

                    <ReactCSSTransitionGroup
                        transitionName="item"
                        transitionEnterTimeout={600}
                        transitionLeaveTimeout={400}
                        >
                        {Comments}
                    </ReactCSSTransitionGroup>

                </div>

            </div>

            );
    }
}







