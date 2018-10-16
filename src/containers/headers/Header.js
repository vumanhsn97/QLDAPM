import { LinkContainer } from "react-router-bootstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./Header.css"
class Header extends Component {
  render() {
    return (
      <div>
      <Navbar fluid collapseOnSelect className="head-size">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"><div className="web-name">BugKiller</div></Link>
            <div className="web-title">Website quản lý lỗi cho dự án ít người</div>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse className="item">
          <Nav pullRight>
            <LinkContainer to="/signup">
              <div className="btn">Signup</div>
            </LinkContainer>
            <LinkContainer to="/login">
              <div className="btn">Login</div>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    );
  }
}


export default Header;
