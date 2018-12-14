import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import Header from "../../containers/headers/Header"
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: []
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonmyapp.herokuapp.com/username")
      .then(function (response) {
        console.log(response.password)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  validateForm() {
    return 0;
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
      <div style={{height: "100vh"}}>
        <Header />
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <ControlLabel>Email</ControlLabel>
              <FormControl
                autoFocus
                type="email"
                style={{color: "black"}}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                onChange={this.handleChange}
                type="password"
                style={{color: "black"}}
              />
            </FormGroup>
            <Button
              block
              bsSize="large"
              type="submit"
            >
              <Link to="/list-issue">Login</Link>
          </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;