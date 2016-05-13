import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Store from '../imports/client/store/store.js';
import AppContainer from '../imports/client/containers/AppContainer.jsx';

function AppRoot() {
  return (
    <Provider store={Store}>
      <AppContainer />
    </Provider>
  )
}

Meteor.startup(() => {
  //Store.dispatch(setNameActionCreator('bob'));
  //Store.dispatch(showEventForm(true));
  render(<AppRoot />, document.getElementById('render-target'));
});
