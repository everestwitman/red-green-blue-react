import React from 'react';
import Card from './card.jsx';
//./node_modules/.bin/webpack -d --watch

class PlayArea extends React.Component {
  constructor(props){
    super(props);
    this.state={currentCard: <Card color="red" hand={null}/>};
  }
  render(){
    return(
      <div className="play-area">
        {this.state.currentCard}
      </div>
      );
  }
}

export default PlayArea;