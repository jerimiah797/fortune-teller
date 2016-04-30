import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import EventsTable from './EventsTable.jsx';
//import EventForm from './forms/EventForm.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import MyNavbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import EventModal from './EventModal.jsx';

// App component - represents the whole App
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({ showModal: false });
    console.log("setting showModal to false");
  }

  open() {
    this.setState({ showModal: true });
    console.log("setting showModal to true");
  }

  render() {
    return (
      <div>
        <MyNavbar />

        <EventsTable showModal={this.state.showModal} onHide={this.close} openEventModal={this.open} />
        { this.state.showModal ?
          <p>The showModal state variable is now true</p>
          : <p>The showModal state variable is now false</p>
        }
        { this.state.showModal ?
          <EventModal showModal={this.state.showModal} onHide={this.close} />
          : null
        }
      </div>
    );
  }
}
