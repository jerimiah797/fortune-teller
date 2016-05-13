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
    var userDataAvailable = true;

    if (this.props.currentUser !== undefined) {
      console.log(this.props.currentUser);
    } else {
      console.log(this.props.currentUser);
      userDataAvailable = false;
    }

    // var logged_in = function() {
    //   return (
    //
    //   )
    // }


    return (
      <div>
        <MyNavbar />
        {(!this.props.currentUser && userDataAvailable)? <Hero /> : null }
        {(this.props.currentUser && userDataAvailable) ? <EventsTable /> : null}
      </div>
    );
  }
}
