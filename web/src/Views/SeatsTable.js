import React, { Component } from 'react';
import SeatRow from './SeatRow';

class SeatsTable extends React.Component {
  constructor(props) {

    super(props);
  }


  render() {
    var seats = [];
    this.props.seats.forEach(function(seat) {
      seats.push(<SeatRow seat={seat}/>);
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Seat</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {seats}
        </tbody>
      </table>
    );
  }
}


export default SeatsTable;
