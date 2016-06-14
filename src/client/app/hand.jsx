import React from 'react';
import Card from './card.jsx';
import Table from './table.jsx';

class Hand extends React.Component {
  constructor(props){
    super(props);
    this.state = {cards: this._drawCards()};
  }

  render(){
    const HANDCLASS = `hand ${this.props.player}`;

    return(
      <div className={HANDCLASS}>
        {this.state.cards}
      </div>
      
      );
  }

  _drawCards(){
    //Randomly returns an array of 6 card components 
    let cards = [];
    var colors = ["red","green","blue"];
    for (var i = 0; i <= 5; i++) {
      let color = colors[Math.floor(Math.random() * 3)];
      cards.push(<Card color={color} hand={this} id={i}/> )
    }   
    return cards;
  }
}

export default Hand;