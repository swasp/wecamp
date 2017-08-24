import React, { Component } from 'react';
import '../App.css';

class FlightForm extends Component {
    constructor(props) {
        super(props);
        this.state = {flightNumber: '', date: ''};

        this.handleFlightNumberChange = this.handleFlightNumberChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFlightNumberChange(event) {
        this.setState({flightNumber: event.target.value.toUpperCase()});
    }

    handleDateChange(event) {
        this.setState({date: event.target.value});
    }

    handleSubmit(event) {
        //alert('You entered flight number: ' + this.state.flightNumber + ' on ' + this.state.date);
        //this.setState({flightNumber: this.state.value});
        this.props.callbackFromParent(this.state.flightNumber, this.state.date);
        //var flight = Flight.props({flightNo: this.state.value});
        // flight.setFlight(this.state.value);
        //this.setState({flight: flight});
        //  ReactDOM.render(
        //      this.state.flight,
        //      document.getElementById('flight')
        //  );
        event.preventDefault();
    }

    render() {
        return (
            <div className="center">
            <form onSubmit={this.handleSubmit} className="row col-md-4 col-md-push-4">
                <h3>Please enter your flight number</h3>
                <div className="form-group">
                    <label className="col-md-6" for="flightNumberInput">Flight Number:</label>
                    <input id="flightNumberInput" type="text" value={this.state.flightNumber} onChange={this.handleFlightNumberChange} />
                </div>
                <div className="form-group">
                <label className="col-md-6" for="flightDateInput">Date:</label>
                    <input id="flightDateInput" type="date" value={this.state.date} onChange={this.handleDateChange} />
                </div>
                <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}

export default FlightForm;