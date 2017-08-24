import React, { Component } from 'react';
import './App.css';

class FlightForm extends React.Component {
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
        alert('You entered flight number: ' + this.state.flightNumber + ' on ' + this.state.date);
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
            <form onSubmit={this.handleSubmit}>
                <h3>Please enter your flight number</h3>
                <label>
                    <div>Flight Number:</div>
                    <input type="text" value={this.state.value} onChange={this.handleFlightNumberChange} />
                </label>
                <br />
                <br />
                <label>
                    <div>Date:</div>
                    <input type="date" value={this.state.date} onChange={this.handleDateChange} />
                </label>
                <br/>
                <br/>
                <input type="submit" value="Submit" />
                <div id="flight"></div>
            </form>
        );
    }
}

export default FlightForm;