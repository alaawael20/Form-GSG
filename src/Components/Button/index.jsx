import React, { Component } from 'react'
import "./style.css";

class Button extends Component {
  render() {
    const { btnText, preventReload } = this.props;
    return (
      <button className='btnStyle' onClick={preventReload}>{ btnText }</button>
    )
  }
}

export default Button;