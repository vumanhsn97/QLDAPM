import React, { Component } from 'react';
import $ from 'jquery';
import './home.css';
class Home extends Component {
  constructor(){
    super();
    this.state = {
      data:
      [
        {
          "id" : "1",
          "name" : "manh",
          "age" : "20"
        },
        {
          "id" : "2",
          "name" : "hai",
          "age" : "2"
        }
      ]
    }
  }
  render() {
    return(
      <div>
        <div class = "container">
          <Tab />
          <Body />
        </div>
      </div>
    );
  }
}

class Tab extends Component {
  handleClick(){
    var x = document.getElementById("m_menu");
    if (x.className === "menu") {
      x.className = x.className + " responsive";
      
    }
    else {
      x.className = "menu";
    }
  }
  render(){
    return(
      <div>
        <div class = "tab-color"></div>
        <div class = "menu" id = "m_menu">
          <div id = "m_item">
            <div class = "item" onClick = {this.handleClick}></div>
          </div>
          <div class = "tab">Home</div>
          <div class = "tab">Support</div>
          <div class = "tab">Spicing</div>
          <div class = "tab">Migration</div>
          <div class = "tab">Toturials</div>
          <div class = "tab">Blog</div>
          <div class = "btn-login">Login</div>
        </div>
        <div class = "btn-login-phone">Login</div>
      </div>
      
    );
  }
}

class Body extends Component {

  render() {
    return (
      <div class = "home-body">
        <div class = "start-account">
        <div class = "start-account-left">
          <div class = "monitor">
            <div class = "text-monitor">
              
            </div>
          </div>
        </div>
        <div class = "start-account-right">
          <div class = "text-account-right">If you don't have an account! Please click here</div>
          <div class = "btn-start-account">
            START FREE ACCOUNT
          </div>
        </div>
        </div>
        <div class = "body-center">
          <div class = "body-center-title">Let's to start and write some things here</div>
        </div>
        <div class = "body-bottom">
        </div>
      </div>
    );
  }
}
export default Home;
