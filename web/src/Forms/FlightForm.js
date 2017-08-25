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
        this.props.callbackFromParent(this.state.flightNumber, this.state.date);
        event.preventDefault();
    }

    render() {
        return (
            <div className="center">
            <form onSubmit={this.handleSubmit} className="row col-md-4 col-md-push-4 form-horizontal flightform">
                <h4>Please enter your flight information</h4>
                <div className="form-group">
                    <label className="col-md-6" htmlFor="flightNumberInput">Flight Number:</label>
                    <div className="col-md-6">
                        <input className="form-control" id="flightNumberInput" type="text" value={this.state.flightNumber} onChange={this.handleFlightNumberChange} />
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="form-group">
                    <label className="col-md-6" htmlFor="flightDateInput">Date:</label>
                    <div className="col-md-6">
                        <input className="form-control" id="flightDateInput" type="date" value={this.state.date} onChange={this.handleDateChange} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-6 col-sm-6">
                        <input type="submit" value="Submit" className="btn btn-default"/>
                    </div>
                </div>
            </form>
            </div>
        );
    }
}

export default FlightForm;
