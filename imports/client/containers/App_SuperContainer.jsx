// AppContainer.jsx
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import AppSuper from '../components/App_Super.jsx';

export default createContainer(({ params }) => {
  const currentUser = Meteor.user();

  return {
    currentUser,
  };
}, AppSuper);
