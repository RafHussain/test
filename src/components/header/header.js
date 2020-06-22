import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar
          bg="light"
          expand="lg"
          sticky="bottom"
        >
          <Navbar.Brand href="/">
            Authentise Frontend Coding Challenge
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Header;
