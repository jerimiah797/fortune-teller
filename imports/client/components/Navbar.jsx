import React, { Component } from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';


// Task component - represents a single debit or credit account
export default class MyNavbar extends Component {
  render() {
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Fortune Teller</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Events</NavItem>
            <NavItem eventKey={2} href="#">Calendar</NavItem>
            <NavDropdown eventKey={3} title="Fortune" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Savings Goal</MenuItem>
              <MenuItem eventKey={3.2}>Bill Eliminator</MenuItem>
              <MenuItem eventKey={3.3}>Other Goal</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Tips</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Donate</NavItem>
            <NavItem eventKey={2} href="#"><AccountsUIWrapper /></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
