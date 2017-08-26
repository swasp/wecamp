import React, { Component } from 'react';
import LocationInformation from './LocationInformation';
import '../App.css';

class FlightDetails extends Component {
    constructor(props) {
        super(props);
    }

   render() {
        return (
            <div className="flightInformation">
                <h1>Flight Information</h1>
                <table className="center">
                    <tbody>
                        <tr><th>Flight number:</th><td>{this.props.flight.flightNumber}</td></tr>
                        <tr><th>Date:</th><td>{this.props.flight.flightDate}</td></tr>
                        <tr><th>From:</th><td><LocationInformation location={this.props.flight.from} /></td></tr>
                        <tr><th>To:</th><td><LocationInformation location={this.props.flight.to} /></td></tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FlightDetails;