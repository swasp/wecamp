import React, { Component } from 'react';
import '../App.css';

var locations = {
    "AMS": {name: 'Amsterdam'},
    "FRA": {name: 'Frankfurt'},
    "MAN": {name: 'Manchester'}
};

class LocationInformation extends Component {
    render() {
        return (
            <span>
                {locations[this.props.location].name}
            </span>
        );
    }
}

export default LocationInformation;