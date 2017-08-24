import React, { Component } from 'react';
import '../App.css';

class Seatmap extends Component {
    constructor(props) {
        super(props);
        this.state = {row: '', seat: ''};

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
        alert('You entered seat: ' + this.state.row  + this.state.seat);
        this.props.callbackFromParent(this.state.row, this.state.seat);

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Please enter your seat</h3>
                <label>
                    <div>Row:</div>
                    <input type="text" value={this.state.row} onChange={this.handleFlightNumberChange} />
                </label>
                <br />
                <br />
                <label>
                    <div>Column:</div>
                    <input type="text" value={this.state.seat} onChange={this.handleDateChange} />
                </label>
                <br/>
                <br/>
                <input type="submit" value="Submit" />
                <div id="flight"></div>
            </form>
        );
    }
}

export default Seatmap;