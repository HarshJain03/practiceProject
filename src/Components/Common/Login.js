import React, { Component } from "react";
import Carousel from "./Carousel";
import Navbar from "./Navbar";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "email") {
      this.setState({ email: value });
    }
  };

  clickMe = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <>
        <Navbar />
        <div id="name1" className="text-center">
          <h1>Welcome, Hi I'm Harsh</h1>
          <h2>
            {" "}
            <u> Full Stack Web Developer </u>{" "}
          </h2>
        </div>
        {/* <Carousel /> */}
        <div className="container">
          <div className="outerbox">
            <h1>Sign Up</h1>
            <div className="box">
              <label>Email :- </label>
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="box">
              <label>Password :- </label>
              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                value={this.state.password}
              />
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={this.clickMe}
            >
              {" "}
              Sign Up{" "}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
