import React, { Component } from 'react'
import SignIn from '../SignIn'
import SignUp from './../SignUp/index';

export default class GamersPage extends Component {
    state = {
      isSignedIn: true
    }
  
    togglePage = () => {
      this.setState((prevState) => ({
        isSignedIn: !prevState.isSignedIn
      }))
    }
  
    render() {
      return (
        <div>
          {this.state.isSignedIn ? (<SignIn togglePage={this.togglePage} />) : (<SignUp togglePage={this.togglePage} />)}
        </div>
      )
    }
  }