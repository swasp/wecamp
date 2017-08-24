import React, { Component } from 'react';
import Flight from './Flight';
import ReactDOM from 'react-dom';
import './App.css';

class FlightForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', flight: null};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value.toUpperCase()});
    }

    handleSubmit(event) {
        alert('A flight number was submitted: ' + this.state.value);
        // var flight = Flight;
        // flight.setFlight(this.state.value);
        // this.setState({flight: flight});
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
                    Flight Number:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                <div id="flight"></div>
            </form>
        );
    }
}

export default FlightForm;