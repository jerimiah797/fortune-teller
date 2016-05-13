import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import EventsTable from './EventsTable.jsx';
//import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import MyNavbar from './Navbar.jsx';
import Hero from './Hero.jsx';

// App component - represents the whole App
export default class App extends Component {
  render() {
    if (!this.props.currentUser) {
      console.error("Still waiting for user info");
      //return false;
    } else {
      console.log(this.props.currentUser);
    }

    // var logged_in = function() {
    //   return (
    //
    //   )
    // }

    return (
      <div>
        <MyNavbar />
        <Hero />
        <EventsTable />
      </div>
    );
  }
}
