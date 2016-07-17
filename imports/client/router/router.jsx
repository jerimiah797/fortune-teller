import React, {Component} from 'react';
import { Router, Route, Redirect, browserHistory, IndexRoute } from 'react-router';

//import AppContainer from '../containers/AppContainer.jsx';
import App from '../components/App.jsx';
//import EventsTable from '../components/EventsTable.jsx';
//import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
//import NotFound from '../components/NotFound.jsx';

export default (
    <Route path="/" component={ App }>
      <IndexRoute loggedIn={false} components={{ nav: null, content: Hero }}></IndexRoute>
      <Redirect from="*" to="/" />
    </Route>
);
