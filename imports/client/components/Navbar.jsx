import React, { Component } from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';


export default class MyNavbar extends Component {
  render() {
    signedIn = this.props.routes[0].loggedIn
    signedInNav =
        <Nav>
          <LinkContainer to={{ pathname: '/events' }}>
            <NavItem eventKey={1}>Events</NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: '/ledger' }}>
            <NavItem eventKey={2}>Ledger</NavItem>
          </LinkContainer>
          <NavDropdown eventKey={3} title="Fortune" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Savings Goal</MenuItem>
            <MenuItem eventKey={3.2}>Bill Eliminator</MenuItem>
            <MenuItem eventKey={3.3}>Other Goal</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Tips</MenuItem>
          </NavDropdown>
        </Nav>;


    //console.log(this.props);
    return (
      <Navbar inverse fixedTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink to="/">Fortune Teller</IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {signedIn ? signedInNav : null}
          <Nav pullRight>
            <LinkContainer to={{ pathname: '/about' }}>
              <NavItem eventKey={1} href="/about">About</NavItem>
            </LinkContainer>
            <NavItem eventKey={2} href="#"><AccountsUIWrapper /></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
