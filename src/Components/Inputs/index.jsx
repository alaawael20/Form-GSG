import React, { Component } from 'react'
import "./style.css";

class Inputs extends Component {
  render() {
    const { labelName, type, placeholder } = this.props;
    return (
      <div className='input-text'>
        <label>{ labelName }</label>
        <input type={ type } placeholder={ placeholder } />
      </div>
    )
  }
}

export default Inputs;