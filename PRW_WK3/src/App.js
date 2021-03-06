import React, { Component } from 'react'
import './App.css'
import Main from './components/Main'

import { BrowserRouter as Router } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Main />
        </div>
      </Router>
    );
  }
}

export default App
