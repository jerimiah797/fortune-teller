import React, { Component } from 'react';

import EventsTable from './EventsTable.jsx';
import EventForm from './EventForm.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';

// App component - represents the whole App
export default class App extends Component {


  render() {
    return (
      <div className="container">
        <header>
          <Navbar />
        </header>

        <EventsTable />
        <EventForm />
      </div>
    );
  }
}
