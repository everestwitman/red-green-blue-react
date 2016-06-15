import React from 'react';
import Hand from './hand.jsx';
import PlayArea from './play_area.jsx';
import Card from './card.jsx';
//./node_modules/.bin/webpack -d --watch

class Table extends React.Component {
  constructor(props){
    super(props);
    this.state={currentCard: <Card color="red" hand={null}/>};
  }
  render(){
    return (
      <div>
        <Hand player="opponent-hand" table={this}/>
          <div className="play-area">
            {this.state.currentCard}
          </div>
        <Hand player="my-hand" table={this}/>
      </div>
  
      );
    
  }
}

export default Table;