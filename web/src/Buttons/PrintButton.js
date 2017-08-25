import React, { Component } from 'react';

class PrintButton extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.clickHandler.bind(this);
    }

    clickHandler() {
        console.log(this);
    }

    render() {
      return (
        <button onClick={this.handleClick}>Print</button>
      );
  }
}

export default PrintButton;
