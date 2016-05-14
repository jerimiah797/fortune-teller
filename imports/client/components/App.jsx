// App.jsx
import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import MyNavbar from './Navbar.jsx';
import Hero from './Hero.jsx';

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
    // console.log("this.props.currentUser: "+this.props.currentUser);

    var userDataAvailable = true;
    var currentUser = this.props.currentUser;
    if (currentUser === undefined) {
      userDataAvailable = false;
    }

    var loggedOut = (!currentUser && userDataAvailable);
    var loggedIn = (currentUser && userDataAvailable);

    children = this.props.children;
    return (
      <div>
        {loggedIn || loggedOut ? <MyNavbar loggedIn={loggedIn} /> : null}
        {loggedOut ? <Hero /> : null }
        {loggedIn ? children : null}
      </div>
    );
  }
}
