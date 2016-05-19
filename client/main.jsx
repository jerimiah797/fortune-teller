import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App_SuperContainer from '../imports/client/containers/App_SuperContainer.jsx';
//import Store from '../imports/client/store/store.js';
//import Routes from '../imports/client/router/RouterContainer.jsx';
//import Routes from '../imports/client/router/router.jsx';


function AppRoot() {
  return (
    <App_SuperContainer/>
  )
}

Meteor.startup(() => {
  //Store.dispatch(setNameActionCreator('bob'));
  //Store.dispatch(showEventForm(true));
  render(<AppRoot />, document.getElementById('render-target'));
});
