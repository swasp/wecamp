import React, { Component } from 'react';

class PrintButton extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.clickHandler.bind(this);
    }

    clickHandler() {
        console.log(this);
        alert('No Printer attached, so Sorry!');
    }

    render() {
      return (
        <button className="btn btn-default btn-xs" onClick={this.handleClick}>Print</button>
      );
  }
}

export default PrintButton;
