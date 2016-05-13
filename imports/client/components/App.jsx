import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import EventsTable from './EventsTable.jsx';
import Ledger from './Ledger.jsx';
import MyNavbar from './Navbar.jsx';
import Hero from './Hero.jsx';

// App component - represents the whole App
export default class App extends Component {
  render() {
    // This seems hacky, but this.props.currentUser is subscribed
    // to Meteor.user(). When Meteor.user() changes, the prop updates and this
    // component re-renders. Uncomment the log statement to see it happen.
    // This test below deals with the fact that Meteor.user() is undefined
    // during the first rendering of this component, and we should wait for it
    // to update before we display user-level components other than the navbar
    // rather than briefly show the logged out homepage before the logged in
    // page.
    // console.log(this.props);
    var userDataAvailable = true;
    var currentUser = this.props.currentUser;
    if (currentUser === undefined) {
      userDataAvailable = false;
    }

    var loggedOut = (!currentUser && userDataAvailable);
    var loggedIn = (currentUser && userDataAvailable);

    return (
      <div>
        <MyNavbar />
        { loggedOut ? <Hero /> : null }
        { loggedIn ? <Ledger /> : null}
      </div>
    );
  }
}
