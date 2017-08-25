import React, { Component } from 'react';

class EditButton extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.clickHandler.bind(this);
    }

    clickHandler() {
      console.log(this);
    }

    render() {
      return (
        <button className="btn btn-primary" onClick={this.handleClick}>Edit</button>
      );
    }
}

export default EditButton;
