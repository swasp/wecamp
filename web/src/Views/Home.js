import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FlightForm from '../Forms/FlightForm';
import SeatForm from '../Forms/SeatForm';
import AircraftInformation from '../Views/AircraftInformation';

const flights = {
    "KL123": {from: 'AMS', to: 'MAN', equipment: 'KLM_Airbus_A330-300.jpg'},
    "KL124": {from: 'MAN', to: 'AMS', equipment: 'KLM_Boeing_737-800.jpg'},
    "KL789": {from: 'AMS', to: 'FRA', equipment: 'KLM_Embraer_ERJ-175.jpg'},
    "KL987": {from: 'FRA', to: 'AMS', equipment: 'KLM_Fokker_70.jpg'}
};

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {flight: '', date: ''};
    }

    inputFlightCallback = (flightNo, flightDate) => {
        fetch('http://api.swasp.local/flight?flightnumber=' + flightNo)
            .then(result=>result.json())
            .then(flight=>this.setState({flight}));
    };



    getFlight() {

        var flight = {
            flightNumber: this.state.flight.flight.number,
            flightDate: this.state.flight.flight.date,
            from: this.state.flight.flight.from,
            to: this.state.flight.flight.to,
            equipment: "img/equipment/" + this.state.flight.flight.equipment
        };

        return flight;
    }

    inputSeatCallback = (seatRow, seatLetter) => {
        ReactDOM.render(
            <AircraftInformation flight={this.getFlight()} seatLetter={seatLetter} seatRow={seatRow}/>,
            document.getElementById('flightForm')
        );
    };

    componentDidUpdate() {
        ReactDOM.render(
            <SeatForm callbackFromParent={this.inputSeatCallback} flight={this.getFlight()} instruction="Which seat do you currently have?"/>,
            document.getElementById('flightForm')
        );
    }

    render() {
    return (
      <div id="flightForm">
        <p className="App-intro"></p>
        <FlightForm callbackFromParent={this.inputFlightCallback.bind(this)}/>
      </div>
    );
  }
}

export default Home;
