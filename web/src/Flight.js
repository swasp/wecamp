import React, { Component } from 'react';

class Flight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), flightNo: null};
    }

    setFlight(flightNumber) {
        this.setState({flightNo: flightNumber})
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Flight;