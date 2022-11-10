import React, { Component } from "react";

export class Login extends Component {
  constructor() {
    super();
    this.state={
        email:"",
        password:"",
        error:"",
    }
  }

  

  render() {
    return <div>Login</div>;
  }
}

export default Login;
