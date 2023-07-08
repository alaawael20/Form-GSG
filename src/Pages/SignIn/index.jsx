import React, { Component } from 'react'
import "./style.css";
import Logo from "../../Components/Logo";
import Paragraph from '../../Components/Paragraph';
import Inputs from '../../Components/Inputs';
import Button from '../../Components/Button';

class SignIn extends Component {
  render() {
    return (
      <div className='signUp-page'>
        {/** Left Section */}
        <div className="signUp-info-box">
          <Logo logoImage="/assets/logo.svg" />
          <Paragraph cornerImage="/assets/joystick.png" />
        </div>
        {/** Right Section */}
        <div className="signUp-box">
          <div>
            <div className="title">
              <h1>Join the game!</h1>
              <p>Go inside the best gamers social network!</p>
              <ul>
                <li><img src="/assets/google.svg" alt="google" /></li>
                <li><img src="/assets/twitter.svg" alt="twitter" /></li>
                <li><img src="/assets/linkedin.svg" alt="linkedin" /></li>
                <li><img src="/assets/github.svg" alt="github" /></li>
              </ul>
              <span></span>
            </div>
            <form action="">
              <Inputs labelName="Your email" type="email" placeholder="Write your email" imageHidden/>
              <Inputs labelName="Enter your Password*" type="password" placeholder="•••••••••" imageSrc='/assets/Vector.svg'/>
              <div className="sign-btn">
                <Button btnText="Login"/>
                <p>Don't have an account? <span>Register</span></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignIn;