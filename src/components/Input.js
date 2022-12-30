import React, { Component } from "react";
import './Input.css'

export default class Input extends Component {
  render() {
    return (
      <div>
        <label>
            {this.props.label}
          <input type="text" />
        </label>
      </div>
    );
  }
}
