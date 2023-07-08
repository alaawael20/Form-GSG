import React, { Component } from 'react'
import SignIn from '../SignIn'
import SignUp from './../SignUp/index';

export default class GamersPage extends Component {
    state = {
      showSign: true
    }
    togglePage = () => {
      this.setState((prevState) => ({
        showSign: !prevState.showSign
      }))
    }
    render() {
      return (
        <div>
          {
            this.state.showSign ? 
            (<SignIn togglePage={this.togglePage} />) : 
            (<SignUp togglePage={this.togglePage} />)
          }
        </div>
      )
    }
  }