import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import Table from './components/Table'

 
// This is the node command to run the project
// ./node_modules/.bin/webpack -d --watch


let store = createStore(reducer)
console.log(store.getState());

// store.subscribe((console.log(store.getState())))
// store.dispatch(playCard());

class App extends React.Component {
  render () {
    return (
      <Table />
      )
  }
}



render(<App />, document.getElementById('app'));
