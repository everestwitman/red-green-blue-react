import React from 'react'
import {render} from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Table from './table.jsx'
import redGreenBlue from './reducers'

// ./node_modules/.bin/webpack -d --watch


let store = createStore(redGreenBlue)
console.log(store);


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
