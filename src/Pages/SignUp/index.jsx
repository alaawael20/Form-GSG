import React, { Component } from 'react';
import "./style.css";
import Logo from "../../Components/Logo";
import Paragraph from '../../Components/Paragraph';
import Inputs from '../../Components/Inputs';
import Button from '../../Components/Button';

class SignUp extends Component {
  state = {
    username: '',
    email: '',
    phone: '',
    password: '',
    repeatPassword: '',
    agreeTerms: false,
    errors: {},
  }

  loadPrevent = (e) => {
    e.preventDefault();
    const errors = this.validateForm();
    if (Object.keys(errors).length !== 0) {
      this.setState({ errors });
    }
  }

  validateForm = () => {
    const { username, email, phone, password, repeatPassword, agreeTerms } = this.state;
    const errors = {};

    // Validate username
    if (username.trim() === '') {
      errors.username = 'Username is required';
    }

    // Validate email
    if (email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!this.isValidEmail(email)) {
      errors.email = 'Invalid email format';
    }

    // Validate phone
    if (phone.trim() === '') {
      errors.phone = 'Phone is required';
    }

    // Validate password
    if (password.trim() === '') {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    // Validate repeat password
    if (repeatPassword.trim() === '') {
      errors.repeatPassword = 'Repeat password is required';
    } else if (password !== repeatPassword) {
      errors.repeatPassword = 'Passwords do not match';
    }

    // Validate agree terms
    if (!agreeTerms) {
      errors.agreeTerms = 'You must agree to the terms and conditions';
    }

    return errors;
  };

  isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleCheckboxChange = (e) => {
    this.setState((prevState) => ({
      agreeTerms: !prevState.agreeTerms,
    }));
  };

  render() {
    const { errors, username, email, phone, password, repeatPassword, agreeTerms } = this.state;

    return (
      <div className='login-page'>
        {/* Left Section */}
        <div className="login-info-box">
          <Logo logoImage="/assets/white-logo.svg" />
          <Paragraph cornerImage="/assets/corner-image.svg" />
        </div>
        {/* Right Section */}
        <div className="login-box">
          <button className="back-btn">
            <i className="fa-solid fa-angle-left"></i>
            <span onClick={this.props.togglePage}>Back</span>
          </button>
          <div className="login">
            <div>
              <div className="title">
                <h1>Register Individual Account!</h1>
                <p>For the purpose of gamers regulation, your details are required.</p>
              </div>
              <form action="" onSubmit={this.loadPrevent}>
                <Inputs
                  labelName="Username*"
                  type="text"
                  placeholder="Enter username"
                  imageHidden
                  name="username"
                  value={username}
                  onChange={this.handleInputChange}
                />
                {username.trim() === '' && <p className="error">{errors.username}</p>}
                <Inputs
                  labelName="Email address*"
                  type="email"
                  placeholder="Enter email address"
                  imageHidden
                  name="email"
                  value={email}
                  onChange={this.handleInputChange}
                />
                {email.trim() === '' && <p className="error">{errors.email}</p>}
                <Inputs
                  labelName="Phone*"
                  type="text"
                  placeholder="Enter phone"
                  imageHidden
                  name="phone"
                  value={phone}
                  onChange={this.handleInputChange}
                />
                {phone.trim() === '' && <p className="error">{errors.phone}</p>}
                <Inputs
                  labelName="Create Password*"
                  type="password"
                  placeholder="Password"
                  imageSrc='/assets/Vector.svg'
                  name="password"
                  value={password}
                  onChange={this.handleInputChange}
                />
                {password.trim() === '' && <p className="error">{errors.password}</p>}
                <Inputs
                  labelName="Repeat password*"
                  type="password"
                  placeholder="Repeat password"
                  imageSrc='/assets/Vector.svg'
                  name="repeatPassword"
                  value={repeatPassword}
                  onChange={this.handleInputChange}
                />
                {repeatPassword.trim() === '' && <p className="error">{errors.repeatPassword}</p>}
                <div className='checkbox'>
                  <input
                    type="checkbox"
                    id="checkbox"
                    checked={agreeTerms}
                    onChange={this.handleCheckboxChange}
                  />
                  <label htmlFor="checkbox">I agree to terms & conditions</label>
                </div>
                {!agreeTerms && <p className="error">{errors.agreeTerms}</p>}
                <div className="register">
                  <Button btnText="Register Account" />
                  <span></span>
                </div>
                <button className='btnStyle' onClick={this.props.togglePage}>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;