import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from '../store/store.js';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import authRoutes from '../router/authRouter.jsx';
import Routes from '../router/router.jsx';

export default class AppSuper extends Component {
  render(){
    //console.log("this.props.currentUser: "+this.props.currentUser);
    console.log("Rendering the SuperContainer")
    var userDataAvailable = true
    var currentUser = this.props.currentUser
    if (currentUser === undefined) {
      userDataAvailable = false
    }

    var loggedOut = (!currentUser && userDataAvailable);
    var loggedIn = (currentUser && userDataAvailable);

    if (loggedIn) {
      console.log("Logged in. Refreshing the router...")
      let cachebuster = Date.now()
      return(
        <Provider store={Store}>
          <Router key={cachebuster} history={browserHistory}>
            {authRoutes}
          </Router>
        </Provider>
      )
    }

    if (loggedOut) {
      console.log("Logged out. Refreshing the router...")
      let cachebuster = Date.now()
      return(
        <Provider store={Store}>
          <Router key={cachebuster} history={browserHistory}>
            {Routes}
          </Router>
        </Provider>
      )
    }

    console.log("Still waiting for usable userdata")
    return(
      <div></div>
    )
  }
}
