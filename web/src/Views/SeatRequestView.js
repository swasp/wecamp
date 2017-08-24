import React, { Component } from 'react';
import '../App.css';

class SeatRequestView extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>
            <div className="flightInformation">
                <h1>You requested seat: {this.props.seatRow}{this.props.seatColumn}</h1>
            </div>
            </div>
        );
    }
}

export default SeatRequestView;