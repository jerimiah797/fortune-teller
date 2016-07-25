import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from '../store/store.js';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import authRoutes from '../router/authRouter.jsx';
import Routes from '../router/router.jsx';
import { Events } from '../../api/events.js';
import { Meteor } from 'meteor/meteor';

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
      console.log(currentUser)
      if (currentUser.username == "jham") {
        if (Events.find({}).count() == 0) {
          createdAt = new Date();
          console.log("repopulating events db")
          Events.insert({name: "Car Payment", amount: 500, type: "payment", recurring: true, period: "month", createdAt: createdAt, dates:[4], skips: 0, recurDescription: "Once A Month", owner: currentUser._id, username: currentUser.username });
          Events.insert({name: "Mortgage", amount: 1500, type: "payment", recurring: true, period: "month", createdAt: createdAt, dates:[1], skips: 0, recurDescription: "Once A Month", owner: currentUser._id, username: currentUser.username  });
          Events.insert({name: "Cell Phone", amount: 200, type: "payment", recurring: true, period: "month", createdAt: createdAt, dates:[6], skips: 0, recurDescription: "Once A Month", owner: currentUser._id, username: currentUser.username  });
          Events.insert({name: "Car Insurance", amount:100, type: "payment", recurring: true, period: "month", createdAt: createdAt, dates:[12], skips: 0, recurDescription: "Once A Month", owner: currentUser._id, username: currentUser.username  });
          Events.insert({name: "Gas", amount: 100, type: "payment", recurring: true, period: "month", createdAt: createdAt, dates:[1], skips: 0, recurDescription: "Once A Month", owner: currentUser._id, username: currentUser.username  });
          Events.insert({name: "Paycheck", amount: 2500, type: "income", recurring: true, period: "month", createdAt: createdAt, dates:[5, 21], skips: 0, recurDescription: "Twice A Month", owner: currentUser._id, username: currentUser.username  });
          Events.insert({name: "Internet", amount: 120, type: "payment", recurring: true, period: "month", createdAt: createdAt, dates:[23], skips: 0, recurDescription: "Once A Month", owner: currentUser._id, username: currentUser.username  });
          Events.insert({name: "Electric", amount: 90, type: "payment", recurring: true, period: "month", createdAt: createdAt, dates:[10], skips: 1, recurDescription: "Every 2 Months", owner: currentUser._id, username: currentUser.username  });
        }
      }
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
