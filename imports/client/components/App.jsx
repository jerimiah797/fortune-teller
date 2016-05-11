import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import EventsTable from './EventsTable.jsx';
//import EventForm from './forms/EventForm.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import MyNavbar from './Navbar.jsx';
import Hero from './Hero.jsx';
//import EventModal from './EventModal.jsx';

// App component - represents the whole App
export default class App extends Component {

  render() {
    return (
      <div>
        <MyNavbar />
        <EventsTable />
      </div>
    );
  }
}
