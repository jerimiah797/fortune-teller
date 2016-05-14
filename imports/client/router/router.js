import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import AppContainer from '../containers/AppContainer.jsx';

import EventsTable from '../components/EventsTable.jsx';
import Ledger from '../components/Ledger.jsx';
import { NotFound } from '../components/NotFound.jsx';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={ AppContainer }>
      <IndexRoute component={ EventsTable } />
    </Route>
    <Route path="*" component={ NotFound }>
    </Route>
  </Router>
);
