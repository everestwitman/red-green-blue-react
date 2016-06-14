import React from 'react';
import {render} from 'react-dom';
import Table from './table.jsx';
import Card from './card.jsx';
import Hand from './hand.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
      <Table/>
      </div>
      );
  }
}


render(<App />, document.getElementById('app'));