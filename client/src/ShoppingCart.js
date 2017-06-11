
import React from 'react';

import * as Actions from "./actions/ShoppingCartActions";
import ShoppingCartStore from "./stores/ShoppingCartStore";

import * as OrderActions from "./actions/OrderActions";

import UserStore from "./stores/UserStore";

import Alert from './Alert';

export default class ShoppingCart extends React.Component{

    constructor(props){
      super(props);

      this.state = {
        games: []
      }

      this.getAllGames = this.getAllGames.bind(this);

      this.handleSubmitOrder = this.handleSubmitOrder.bind(this);

      this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleSubmitOrder(event){
    let user = UserStore.getUser();
    if(user===null){
      alert("You must log in first");
    }else{
      OrderActions.createOrder(
      {
        UserId: user.Id,
        Games: this.state.games
      });
    }
  }

  handleRemoveClick(event){
    var result = this.state.games.filter(function( obj ) {
      return obj.Id == event.target.dataset.id;
    });
    ShoppingCartStore.removeGame(result[0]);
  }
   

   getAllGames(){
      this.setState({
        games: ShoppingCartStore.getAllGames()
      });
   } 


  componentWillMount(){
    ShoppingCartStore.on("change", this.getAllGames);
  }

  componentWillUnmount(){
    ShoppingCartStore.removeListener("change", this.getAllGames);
  }

  render(){

        const Games = this.state.games.map((game) => {
            return <h4 key={game.Id}><span data-id={game.Id} className="glyphicon glyphicon-remove" onClick={this.handleRemoveClick}></span> {game.Name} - <span className="pull-right">${game.Price}</span> </h4>
            });

        var totalPrice = 0;
         this.state.games.map((game) => {
            totalPrice = totalPrice + game.Price;
            });

         const redStyle = {
          color: "red"
         };

         const hrStyle = {
          marginBottom: "0px"
         };

    return(        


          <div id={this.props.modalId} className="modal fade" role="dialog">
            <div className="modal-dialog">


              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Shopping Cart <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></h4>
                </div>
                <div className="modal-body clearfix">

                    <Alert />

                    {Games.length != 0 && Games || <h3>There are no games in the shopping cart.</h3>}

                    <hr style={hrStyle}/>
                    <div ><h4 className="pull-right">Total: <span style={redStyle}>${totalPrice}</span></h4></div>


                </div>
                <div className="modal-footer">

                    <button type="button" className="btn btn-primary" onClick={this.handleSubmitOrder}>Submit Order</button>
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>

                </div>
              </div>

            </div>
          </div>


            );
  }
}
