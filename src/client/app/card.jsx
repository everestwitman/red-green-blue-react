import React from 'react';

class Card extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    const CARDCLASS = `card ${this.props.color}-card`;
    return(
        <div className={CARDCLASS} onClick={this._handleClick.bind(this)}></div>
      );
  }

  _handleClick(event){
    event.preventDefault();
    this._playCard();
  }

  _playCard(){
    this._removeCard();
    this.props.hand.props.table.setState({currentCard: this});
  }


  _removeCard(){
    //Remove card from hand's list
    let cards = this.props.hand.state.cards;
    let newCards = [];
    
    for (var i = 0; i <= cards.length - 1; i++) {
      if (cards[i].props.id != this.props.id) {
        newCards.push(cards[i]);
      }
    }  
    this.props.hand.setState({cards: newCards});
  }
}

export default Card;