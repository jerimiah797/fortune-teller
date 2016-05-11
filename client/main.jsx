import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Store from '../imports/client/store/store.js';

import App from '../imports/client/components/App.jsx';

function AppRoot() {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  )
}

Meteor.startup(() => {
  render(<AppRoot />, document.getElementById('render-target'));
});
