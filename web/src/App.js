import React, { Component } from 'react';
import logo from './swasp.png';
import FlightForm from './Forms/FlightForm';
import SeatForm from './Forms/SeatForm';
import AircraftInformation from './Views/AircraftInformation';
import ReactDOM from 'react-dom';
import './App.css';

var flights = {
    "KL123": {from: 'AMS', to: 'MAN', equipment: 'KLM_Airbus_A330-300.jpg'},
    "KL124": {from: 'MAN', to: 'AMS', equipment: 'KLM_Boeing_737-800.jpg'},
    "KL789": {from: 'AMS', to: 'FRA', equipment: 'KLM_Embraer_ERJ-175.jpg'},
    "KL987": {from: 'FRA', to: 'AMS', equipment: 'KLM_Fokker_70.jpg'}
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {flight: '', date: ''};
  }

  getFlight() {
      var flight = {
          flightNumber: this.state.flight,
          flightDate: this.state.date,
          from: flights[this.state.flight].from,
          to: flights[this.state.flight].to,
          equipment: "img/equipment/" + flights[this.state.flight].equipment
      };

      return flight;
  }

  inputSeatCallback = (seatRow, seatLetter) => {
      ReactDOM.render(
          <AircraftInformation flight={this.getFlight()} seatLetter={seatLetter} seatRow={seatRow}/>,
          document.getElementById('flightForm')
      );
  }

  inputFlightCallback = (flightNo, flightDate) => {
    this.setState({flight: flightNo, date: flightDate});
  }

  componentDidUpdate() {
      ReactDOM.render(
          <SeatForm callbackFromParent={this.inputSeatCallback} flight={this.getFlight()} instruction="Which seat do you currently have?"/>,
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
