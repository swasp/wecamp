import React, { Component } from 'react';
import logo from './swasp.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to S.W.A.(S.)P.</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="flightForm"></div>
      </div>
    );
  }
}

export default App;
