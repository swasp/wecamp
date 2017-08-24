import React, { Component } from 'react';
import EditButton from '../Buttons/EditButton';
import DeleteButton from '../Buttons/DeleteButton';
import PrintButton from '../Buttons/PrintButton';

class SeatRow extends React.Component {

  constructor(props) {
    console.log(props);
    super(props);
}
  render() {
    var buttons = [];
    if(this.props.seat.status == 'pending') {
      buttons.push(
        <EditButton seat={this.props.seat} />
      );
      buttons.push(
        <DeleteButton seat={this.props.seat} />
      );
    };
    if(this.props.seat.status == 'accepted') {
      buttons.push(
        <PrintButton seat={this.props.seat} />
      );
    };
    
    // edit and delete button only visible when it's pending
    // print only when accepted

    return (
     <tr>
        <td>{this.props.seat.row}{this.props.seat.col}</td>
         <td>{this.props.seat.status}</td>
         <td>{buttons}</td>
       </tr>
    )
  }
}


export default SeatRow;