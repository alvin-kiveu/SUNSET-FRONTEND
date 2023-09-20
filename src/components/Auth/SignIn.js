import React, { Component } from "react";
import './Auth.css'; // Import your custom CSS file
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import logo from '../../assets/sunsetlogo.png';

class SignIn extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={logo}
              alt="logo"
              className="logo"
            />
          </div>
          <div className="col-md-6">
            <form className="form-signin">
              <h1 className="text-center">Sign In</h1>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your password"
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember Me
                </label>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Sign In
              </button>
              <div className="text-center">
                <a href="#">Forgot Password?</a>
              </div>
              <div className="text-center mt-2">
                Don't have an account? <a href="#">Create Account</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
