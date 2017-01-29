import React, { Component } from 'react'
import ReactDom from 'react-dom'

import Shoji from './components/Shoji'

class App extends Component {
  render() {
    return (
      <div>
        <Shoji />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))
