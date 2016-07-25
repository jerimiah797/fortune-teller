import React, {Component} from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

//import AppContainer from '../containers/AppContainer.jsx';
import App from '../components/App.jsx';
import EventsTable from '../components/EventsTable.jsx';
import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Ledger from '../components/Ledger.jsx';
import About from '../components/About.jsx';
import Hero from '../components/Hero.jsx';
import NotFound from '../components/NotFound.jsx';

export default (
    <Route loggedIn={true} component={ App }>
      <Route path="/"      components={{ nav: Navbar, content: Hero }} />
      <Route path="about"  components={{ nav: Navbar, sidebar: Sidebar, content: About }} />
      <Route path="events" components={{ nav: Navbar, sidebar: Sidebar, content: EventsTable }} />
      <Route path="ledger" components={{ nav: Navbar, sidebar: Sidebar, content: Ledger }} />
    </Route>
);
