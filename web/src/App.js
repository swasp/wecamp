import React, { Component } from 'react';
import logo from './swasp.png';
import FlightForm from './Forms/FlightForm';
import Seatmap from './Forms/Seatmap';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {flight: '', date: ''};
  }

  inputFlightCallback = (flightNo, flightDate) => {
    this.setState({flight: flightNo, date: flightDate});
  }

  componentDidUpdate() {
    alert(this.state.flight + " " + this.state.date);
      ReactDOM.render(
          <Seatmap callbackFromParent={this.inputFlightCallback}/>,
          document.getElementById('flightForm')
      );
  }

  componentDidMount() {
      ReactDOM.render(
        <FlightForm callbackFromParent={this.inputFlightCallback}/>,
        document.getElementById('flightForm')
      );
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
        <div id="flightForm"></div>
      </div>
    );
  }
}

export default App;
