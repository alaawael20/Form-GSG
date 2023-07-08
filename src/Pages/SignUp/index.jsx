import React, { Component } from 'react'
import "./style.css";
import Logo from "../../Components/Logo";
import Paragraph from '../../Components/Paragraph';
import Inputs from '../../Components/Inputs';
import Button from '../../Components/Button';

class SignUp extends Component {
  render() {
    return (
      <div className='login-page'>
        {/** Left Section */}
        <div className="login-info-box">
          <Logo logoImage="/assets/white-logo.svg"/>
          <Paragraph cornerImage="/assets/corner-image.svg"/>
        </div>
        {/** Right Section */}
        <div className="login-box">
          <button className="back-btn">
            <i class="fa-solid fa-angle-left"></i>
            <span onClick={this.props.togglePage}>Back</span>
          </button>
          <div className="login">
            <div>
              <div className="title">
                <h1>Register Individual Account!</h1>
                <p>For the purpose of gamers regulation, your details are required.</p>
              </div>
              <form action="">
                <Inputs labelName="Username*" type="text" placeholder="Enter username" imageHidden/>
                <Inputs labelName="Email address*" type="email" placeholder="Enter email address" imageHidden/>
                <Inputs labelName="Phone*" type="text" placeholder="Enter phone" imageHidden/>
                <Inputs labelName="Create Password*" type="password" placeholder="Password"  imageSrc='/assets/Vector.svg'/>
                <Inputs labelName="Repeat password*" type="password" placeholder="Repeat password"  imageSrc='/assets/Vector.svg'/>
                <div className='checkbox'>
                  <input type="checkbox" id="checkbox" checked/>
                  <label htmlFor="checkbox">I agree to terms & conditions</label>
                </div>
                <div className="register">
                  <Button btnText="Register Account"/>
                  <span></span>
                </div>
                <button className='btnStyle' onClick={this.props.togglePage}>login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp;