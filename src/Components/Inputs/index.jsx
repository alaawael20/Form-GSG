import React, { Component } from 'react'
import "./style.css";

class Inputs extends Component {
  render() {
    const { labelName, type, placeholder, imageHidden, imageSrc } = this.props;
    return (
      <div className='input-text'>
        <label>{ labelName }</label>
        <div className='input-div'>
          <input type={ type } placeholder={ placeholder } />
          <img src={imageSrc} alt="eye" className={`${imageHidden ? "image__hidden" : ""}`}/>
        </div>
      </div>
    )
  }
}

export default Inputs;