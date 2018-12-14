import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Header from "../../containers/headers/Header"
import "./Signup.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      confirmpassword: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div style={{height: "100%"}}>
        <Header />
        <div className="main-agileinfo" style={{ backgroundColor: "white" }}>
          <h1 style={{ color: "black" }}>Signup</h1>
          <div className="agileits-top">
            <div className="Signup">
              <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="username" bsSize="large">
                  <ControlLabel className="text-view">User</ControlLabel>
                  <FormControl
                    autoFocus
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup controlId="email" bsSize="large">
                  <ControlLabel className="text-view" >Email</ControlLabel>
                  <FormControl
                    autoFocus
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                  <ControlLabel className="text-view">Password</ControlLabel>
                  <FormControl
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                  />
                </FormGroup>
                <FormGroup controlId="confirmpassword" bsSize="large">
                  <ControlLabel className="text-view">Confirm Password</ControlLabel>
                  <FormControl
                    value={this.state.confirmpassword}
                    onChange={this.handleChange}
                    type="password"
                  />
                </FormGroup>

                <Button
                  block
                  bsSize="large"
                  disabled={!this.validateForm()}
                  type="submit"
                  style={{marginLeft:"auto", marginRight:"auto"}}
                >
                  Signup
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
