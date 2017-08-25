import React, { Component } from 'react';

class DeleteButton extends React.Component {

    constructor(props) {
        super(props);

        console.log(props);
        this.state = props.seat;

        this.handleClick = this.clickHandler.bind(this);
    }

    clickHandler() {
      console.log(this.state);
      this.setState({});
    }

    render() {
      return (
        <button onClick={this.props.clickHandler}>Delete</button>
      );
  }
}

export default DeleteButton;
