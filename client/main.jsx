import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Store from '../imports/client/store/store.js';
//import setNameActionCreator from '../imports/client/actions/setNameActionCreator.js';
//import { showEventForm } from '../imports/client/actions/EventForm.js';
import App from '../imports/client/components/App.jsx';

function AppRoot() {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  )
}

Meteor.startup(() => {
  //Store.dispatch(setNameActionCreator('bob'));
  //Store.dispatch(showEventForm(true));
  render(<AppRoot />, document.getElementById('render-target'));
});
