import React, { Component } from 'react';
import logo from './swasp.png';
import FlightForm from './FlightForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {flight: '', date: ''};
  }

  inputFlightCallback = (flightNo, flightDate) => {
    this.setState({flight: flightNo, date: flightDate});
    //alert('Flightnumber set in App: ' + dataFromChild);
    //alert('Flightnumber set in flight: ' + this.state.flight);
  }

  componentDidUpdate() {
    alert(this.state.flight + " " + this.state.date);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome</h2>
        </div>
        <p className="App-intro">
        </p>
        <FlightForm callbackFromParent={this.inputFlightCallback}/>
      </div>
    );
  }
}

export default App;
