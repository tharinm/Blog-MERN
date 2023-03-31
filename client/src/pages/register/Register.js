import React, { Component } from 'react'
import './register.css'

export default class Register extends Component {
  render() {
      return (
        <div className="register">
          <span className="registerTitle">REGISTER</span>
          <form className="registerForm">
            <label>Username</label>
            <input
              className="registerInput"
              type="text"
              placeholder="Enter your username..."
            />
            <label>Email</label>
            <input
              className="registerInput"
              type="text"
              placeholder="Enter your email..."
            />
            <label>Password</label>
            <input
              className="registerInput"
              type="password"
              placeholder="Enter your password..."
            />
            <button className="registerButton">Register</button>
          </form>
          <button className="registerLoginButton">Login</button>
        </div>
      );
  }
}
